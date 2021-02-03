const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    headline:{
        type:String,
        required:true
    },
    
});


const Comments = mongoose.model('comments', CommentSchema);
module.exports = Comments;