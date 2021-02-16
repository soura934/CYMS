const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
        
    },
    cartItem: {
         type: Schema.Types.ObjectId,
        ref: 'products'
               
     },
        
    
    date: {
      type: Date,
      default: Date.now
    }
  });

  const Cart = mongoose.model('carts', CartSchema);
   module.exports = Cart;