const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Cart = require("../../models/Cart");
const User = require("../../models/User");
const Item = require("../../models/Product");
const { session } = require("passport");

router.get('/test', (req, res) => {
    res.json({msg: "This is the cart route!"})
});

router.post("/",
    passport.authenticate('jwt', {session:false}),
    (req, res) => {
        const cart = new Cart({
            user: req.body.user.id,
            cartItem: req.body.product_id
         })
        
         cart.save()
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json({err}))
    }
    )
    
    router.get('/user/:user_id',
    passport.authenticate('jwt', {session: false}),
    (req, res) =>{
        Cart.find({user: req.params.user_id})
        .then(user => {
            return res.json(user)
        })
        .catch(err => res.status(400).json({err}))
    })

    



module.exports = router;