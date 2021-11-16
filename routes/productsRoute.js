const express = require('express');
const router = express.Router();
const Product = require('../model/productSchema');
const mongoose = require('mongoose');

// GET all products
router.get('/products', async (req, res) => {
  const data = await Product.find();
  res.send(data)
})

// GET single product
router.get('/products/:id', async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.send(data);
})

// POST (add a product)
router.post('/products/', async (req, res) => {
  const prod = new Product({
    name: 'Nike Air Force 1',
    price: 95,
    description: 'Shoe'
  })

  await prod.save((err, res) => {
    if(err) throw err
    console.log(res)
  })
  res.send(prod)
})

// PUT (update a product)
router.put('/products/:id', (req, res) => {
  const data = Product.findByIdAndUpdate(req.params.id, {
    name: 'Adidas Stan Smith',
    price: 75,
    description: 'Adidas Shoes'
  }, (err, result) => {
    if(err) {
      console.log(err)
    } else {
      res.send(result)
    }
  });
})

// DELETE (remove a product)
router.delete('/products/:id', async (req, res) => {
  const deleted = await Product.findByIdAndRemove(req.params.id)
  if(deleted) {
    res.send('Deleted Successfully')
  } else {
    res.send('Error');
  }
})

module.exports = router;