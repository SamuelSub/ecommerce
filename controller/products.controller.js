const express = require('express');
const Product = require('../model/productSchema');
const mongoose = require('mongoose');

// GET all products
exports.getAllProducts = async (req, res) => {
  const data = await Product.find();
  res.send(data)
}

// GET single product
exports.getSingleProduct = async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.send(data);
}

// POST create new product
exports.addProduct = async (req, res) => {
  // const errors = validationResult(req);
  // if(!errors.isEmpty()) {
  //   return res.status(400).json({errors: errors.array() })
  // }
  const prodData = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    imageLink: req.body.imageLink
  }

  const prod = await new Product(prodData); 

  await prod.save()

  res.send(prod)
  
}

// PUT update an existing product
exports.updateProduct = async (req, res) => {
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
}

// DELETE remove a product
exports.deleteProduct = async (req, res) => {
  const deleted = await Product.findByIdAndRemove(req.params.id)
  if(deleted) {
    res.send('Deleted Successfully')
  } else {
    res.send('Error');
  }
}