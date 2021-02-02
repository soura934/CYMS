const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require*('passport');

const Product = require('../../models/Product');
const validateProductInput = require('../../validation/products')

router.get('/', (req, res) => {
    Product.find()
        .sort( { date: -1} )
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ noproductsfound: 'No products found'}))
});

router.get('/user/:user_id', (req, res) => {
    Product.find({user: req.params.user_id})
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(404).json({ noproductsfound: 'No products found from that user'}))
});

router.get('/:id', (req, res) => {
     Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(404).json({ noproductsfound: 'No products found with that ID'}))
});

router.post('/', 
    passport.authenticate('jwt', { session: false }), (req, res) => {
        const { errors, isValid } = validateProductInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newProduct = new Product({
            text: req.body.text,
            user: req.user.id
        })
        newProduct.save().then(product => res.json(product))
});

module.exports = router;