const express = require('express');
const auth = require('../auth/auth');
const router = express.Router();
const orderController = require('../controller/order.controller');

// GET users orders
router.get('/', auth, orderController.getOrders);

// POST add an order
router.post('/', auth, orderController.addOrder);

// DELETE remove item from users cart
router.delete('/:id', auth, orderController.removeOrders);

module.exports = router;