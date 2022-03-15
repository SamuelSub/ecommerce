const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  }
  // date: Date.now()
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;