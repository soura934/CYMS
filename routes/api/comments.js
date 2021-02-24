const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Comment = require('../../models/Comment');
const User = require('../../models/User');
const Product = require('../../models/Product')
const validateCommentInput = require('../../validation/comments');


router.post("/",
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        
    const {isValid, errors} = validateCommentInput(req.body);
        if (!isValid) {
            
            return res.status(400).json(errors);
        }

        const newComment = new Comment({
            
            user: req.user.id,
            product: req.body.product_id,
            content: req.body.content
        });

        newComment.save()
        .then(comment => res.json(comment))
        .catch(err => res.status(400).json({err}))
    // comment.save((err, comment) => {
    //     if (err) return res.json({ success: false, err})

    //     Comment.find({'_id': comment._id})
    //     .populate('writer')
    //     .exec((err, result)=>{
    //         if (err) return res.json({ success: false, err})
    //         return res.status(200).json({success:true, result})
    //     })
    // })
})


router.get("/getComments", (req,res)=>{
    
        Comment.find({'producttId': req.body.productId})
        .populate('writer')
        .exec((err, comments)=>{
            if (err) return res.status(400).send(err)
            return res.status(200).json({success:true, comments})
        })
})

router.get('/', (req, res) => {
    Comment.find()
        .sort({ date: -1 })
        .then(comments => res.json(comments))
        .catch(err => res.status(404).json({ noComments: 'No comment yet' }));
});


module.exports = router;