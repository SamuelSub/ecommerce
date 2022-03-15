const express = require('express');
const Product = require('../model/productSchema');
const mongoose = require('mongoose');

// GET all products
exports.getAllProducts = async (req, res) => {
  let data;
  if(Object.keys(req.body).length === 0) {
    data = await Product.find();
    res.send(data)
  } else {
    console.log(req)
    data = await Product.find(); 
    res.send(data);
  }
}

// GET single product
exports.getSingleProduct = async (req, res) => {
  const data = await Product.findById(req.params.id)
  res.send(data);
}

// Filter products
exports.filterProducts = async (req, res) => {
  const params = {
    price: req.query.price,
    brands: req.query.brands
  };
  let firstPrice;
  let lastPrice;
  if(params.price === 'upto40') {
    firstPrice = 0;
    lastPrice = 40;
  } else if (params.price === '40to80') {
    firstPrice = 40;
    lastPrice = 80;
  } else if (params.price === '80to120') {
    firstPrice = 80;
    lastPrice = 120;
  } else if (params.price === '120to160') {
    firstPrice = 120;
    lastPrice = 160;
  } else {
    firstPrice = 160;
    lastPrice = 1000000;
  }

  let filteredData
  // Check if only price range query exists so it will filter only based on price
  if(req.query.price) {
    filteredData = await Product.find(
      { $and: [ { price: { $gte: firstPrice } }, { price: { $lte: lastPrice } } ] }
    );
  }
  // Check if only brand query exists so it will filter only based on brand
  if(!req.query.price && req.query.brands) {
    // for some reason brand search doesnt work while other properties work...
    // filteredData = await Product.find({ brand: 'nike' });
  }
  res.send(filteredData)
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