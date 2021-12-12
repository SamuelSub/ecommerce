const express = require('express');
const auth = require('../auth/auth');
const router = express.Router();
const productController = require('../controller/products.controller');

// GET all products
router.get('/', productController.getAllProducts);

// GET single product
router.get('/:id', productController.getSingleProduct);

// POST (add a product)
router.post('/', auth, productController.addProduct);

// PUT (update a product)
router.put('/:id', auth, productController.updateProduct)

// DELETE (remove a product)
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;