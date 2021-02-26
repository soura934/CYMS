const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0
  },
  image: {
    type: String
  },
  id: {
    type: Number,
    required: true
  }
});

ProductSchema.index({
  title: 'text',
  description: 'text'
}, {
  weights: {
    title: 5,
    description: 1
  }
})

ProductSchema.index({
  title: "text"

})



const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
