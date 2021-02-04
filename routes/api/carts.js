const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");

const Cart = require('../../models/Cart');

// router.post('/',
//     passport.authenticate('jwt', {session: false}),
//     (req, res) => {

//         const newCart = new Cart({
//             user: req.user._id,
//             cartItems: { product: req.product.id,
//                          price: req.product.price
//                     }
//         });
//         newCart.save().then((newCart) => {
//             res.json(newCart)
//         }) 
//     })




module.exports = router;