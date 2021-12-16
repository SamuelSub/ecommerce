const express = require('express');
const auth = require('../auth/auth');
const router = express.Router();
const orderController = require('../controller/order.controller');

// GET users orders
router.get('/cart', orderController.getOrders);

// POST add an order
router.post('/cart', orderController.addOrder);

// DELETE remove item from users cart
router.get('/cart', orderController.removeOrder);

module.exports = router;