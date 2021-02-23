const express = require("express");
const router = express.Router();
const CartItem = require("../../models/CartItem");
const passport = require('passport');
const validateCartItemInput = require('../../validation/cartitem');

router.get('/test', (req, res) => {
    res.json({msg: "This is the cart route!"})
});
    

router.post('/', 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { isValid, errors } = validateCartItemInput(req.body);
              
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const item = new CartItem({
            user: req.user.id,
            product: req.body.product_id
          });
        item.save()
            .then(item => res.json(item))
            .catch(err =>res.status(400).json({ err }))
    }
);

router.get('/user/:user_id',
    passport.authenticate('jwt', {session: false}),
    (req, res) =>{
        CartItem.find({user: req.params.user_id})
        .then(user => {
            return res.json(user)
        })
        .catch(err => res.status(400).json({err}))
})


module.exports = router;