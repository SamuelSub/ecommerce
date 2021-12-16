const express = require('express');
const auth = require('../auth/auth');
const router = express.Router();
const cartController = require('../controller/cart.controller');

// GET users cart
router.get('/cart', cartController.getUsersCart);

// POST add item to users cart
router.post('/cart', cartController.addItemToCart);

// PUT update an item in users cart
router.get('/cart', cartController.updateItemInCart);

// DELETE remove item from users cart
router.get('/cart', cartController.removeItemFromCart);

module.exports = router;