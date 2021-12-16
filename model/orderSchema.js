const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Order = new mongoose.model('Order', orderSchema);

module.exports = Order;