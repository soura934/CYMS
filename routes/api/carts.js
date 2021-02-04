const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');

const Cart = require('../../models/Cart');
const product = 
router.get('/test', (req, res) => {
    res.json({msg: "This is the cart route"})
});

router.post('/',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {

        const newCart = new Cart({
            user: req.user.id,
            cartItem: req.product.id
        
        });

        newCart.save().then((newCart) => {
            res.json(newCart)
        }) 
    })




module.exports = router;