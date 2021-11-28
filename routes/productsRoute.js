const express = require('express');
const router = express.Router();
const Product = require('../model/productSchema');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');

// GET all products
router.get('/', async (req, res) => {
  const data = await Product.find();
  res.send(data)
})

// GET single product
router.get('/:id', async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.send(data);
})

// POST (add a product)
router.post('/', 
    body('name').isLength({min: 3}),
    body('price').isLength({min: 1, max: 10}),
    body('description').notEmpty(),
  async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
  }
  const prodData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  }

  const prod = await new Product(prodData); 

  await prod.save()

  res.send(prod)
  
})

// PUT (update a product)
router.put('/:id',
    body('name').isLength({min: 3}),
    body('price').isLength({min: 1, max: 10}),
    body('description').notEmpty(),
  async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array() })
  }
  try {
    const data = await Product.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }); 

    if(data) {
      res.send(data)
    }

  } catch (error) {
    res.send(error)
  }

})

// DELETE (remove a product)
router.delete('/:id', async (req, res) => {
  const deleted = await Product.findByIdAndRemove(req.params.id)
  if(deleted) {
    res.send('Deleted Successfully')
  } else {
    res.send('Error');
  }
})

module.exports = router;