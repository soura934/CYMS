const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: true
    },
    cartItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    date: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = Cart = mongoose.model('cart', CartSchema);