const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  items: [{
    productId: {
      type: String
    },
    name: {
      type: String
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number
    }
  }],
  bill: {
    type: Number,
    required: true,
    default: 0
  }
});

const Cart = new mongoose.model('Cart', cartSchema);

module.exports = Cart;