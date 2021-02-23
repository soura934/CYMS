const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const CartItem = mongoose.model('cartitems', CartItemSchema);
module.exports = CartItem;