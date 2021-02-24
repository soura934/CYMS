const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    content: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
    
});


const Comments = mongoose.model('comments', CommentSchema);
module.exports = Comments;