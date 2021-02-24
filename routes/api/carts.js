const express = require("express");
const router = express.Router();
const Cart = require("../../models/Cart");
const passport = require('passport');
const validateCartItemInput = require('../../validation/cartitem');

router.get('/test', (req, res) => {
    res.json({msg: "This is the cart route!"})
});
    
router.post("/",

    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        
        const { errors, isValid } = validateCartItemInput(req.body);
        if(!isValid) {
            
            return res.status(400).json(errors);
        }
        
        const cart = new Cart({
            
            user: req.body.user_id,
            price: req.body.price,
            cartItem: req.body.product_id
        })
        
        cart.save()
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json({err}))
            
    }
);

router.get('/user/:user_id',
    passport.authenticate('jwt', {session: false}),
    (req, res) =>{
        Cart.find({user: req.params.user_id})
        .then(user => {
            return res.json(user)
        })
        .catch(err => res.status(400).json({ err }))
        
})


module.exports = router;