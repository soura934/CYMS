const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName:{
        type:String,
        required: true
    },
    price:{
        type:Integer,
        required: true
    },
    description:{
        type:String,
        required: true 
    }
});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;