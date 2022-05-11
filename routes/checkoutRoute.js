const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkout.controller')

router.post('/', checkoutController.makePayment);

module.exports = router