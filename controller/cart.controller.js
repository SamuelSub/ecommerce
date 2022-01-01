const express = require('express');
const Cart = require('../model/cartSchema');

exports.getUsersCart = async (req, res) => {

}

exports.addItemToCart = async (req, res) => {
  
  try {
    let cart = await Cart.find({ userId: req.headers.userid });

    if(cart.length === 0) {
      const newCart = new Cart(req.body);
      await newCart.save();
      res.send(newCart);
    } else {
      Cart.findOneAndUpdate({ userId: req.headers.userid }, {$push: { items: req.body.items }}, (err, suc) => {
        if(err) {
          res.send(err)
        } else {
          res.send(suc)
        }
      })
    }
  } catch (error) {
    res.send(error)
  }
}

exports.updateItemInCart = async (req, res) => {

}

exports.removeItemFromCart = async (req, res) => {

}