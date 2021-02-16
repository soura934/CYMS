const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    content: {
        type: String
    }
    
});


const Comments = mongoose.model('comments', CommentSchema);
module.exports = Comments;