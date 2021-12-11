const express = require('express');
const router = express.Router();
const productController = require('../controller/products.controller');

// GET all products
router.get('/', productController.getAllProducts)

// GET single product
router.get('/:id', productController.getSingleProduct);

// POST (add a product)
router.post('/', productController.addProduct);

// PUT (update a product)
router.put('/:id', productController.updateProduct)

// DELETE (remove a product)
router.delete('/:id', productController.deleteProduct);

module.exports = router;