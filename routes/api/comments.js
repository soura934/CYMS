const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const user = require('../../models/User');
// const ProductId = require('../models/Product')
const validateProductInput = require('../../validation/product');


router.post("/saveComment", (req,res)=>{
    const comment = new Comment(req.body)

    comment.save((err, comment) => {
        if (err) return res.json({ success: false, err})

        Comment.find({'_id': comment._id})
        .populate('writer')
        .exec((err, result)=>{
            if (err) return res.json({ success: false, err})
            return res.status(200).json({success:true, result})
        })
    })
})


// router.post("/getComments", (req,res)=>{
    
//         Comment.find({'producttId': req.body.productId})
//         .populate('writer')
//         .exec((err, comments)=>{
//             if (err) return res.status(400).send(err)
//             return res.status(200).json({success:true, comments})
//         })
// })

router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ noComments: 'No comment yet' }));
});


module.exports = router;