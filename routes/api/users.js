const express = require("express");
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require ('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegistrationInput = require('../../validation/registration');
const validateLoginInput = require('../../validation/login');
const keys = require('../../config/keys')

router.get('/test', (req, res) => {
    res.json({msg: "This is the user route!"})
});

router.get( '/current', passport.authenticate('jwt', {session: false}), 
(req, res) => {
    res.send(req.user);
})

router.post('/register', 
   (req, res) => {
    const {errors, isValid} = validateRegistrationInput(req.body);
    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email})
          .then(user => {
              if (user){
                  return res.status(400).json({email: "Email is already registered."})
              } else {
                  
                  const newUser = new User({
                      firstName: req.body.firstName,
                      lastName: req.body.lastName,
                      email: req.body.email,
                      password: req.body.password
                      
                    })
                    
                    bcrypt.genSalt(10, (err, salt) => {
                       
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if(err) throw err;
                                newUser.password = hash;
                                newUser.save()
                                .then(user => res.json(user))
                                .catch(err => console.log(err))
                            })
                    })
                    
                }
            })

        })


router.post('/login', (req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);
    if (!isValid){
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email })
        .then(user => {
            if (!user){
                return res.status(404).json({email: 'Email account not found'})
            }

            bcrypt.compare(password, user.password)
                .then( isMatch => {
                    if (isMatch){
                        const payload = {
                          id: user.id,
                          firstName: user.firstName, 
                          lastName: user.lastName,
                          email: user.email
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer" + token
                                });
                            })
                    } else {
                        return res.status(400).json({
                            password: "Password is Incorrect."
                        })
                    }
                })
        })
})
module.exports = router;
