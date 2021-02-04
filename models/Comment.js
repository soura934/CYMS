const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    content: {
        type: String
    }
    
});


const Comments = mongoose.model('comments', CommentSchema);
module.exports = Comments;