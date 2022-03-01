const express = require('express');
const Cart = require('../model/cartSchema');

exports.getUsersCart = async (req, res) => {
  try {
    let cart = await Cart.find({ userId: req.headers.userid });
    if(cart) {
      res.send(cart)
    } else {
      res.send('Cart Not Found')
    }
  } catch (error) { 
    res.send(error)
  }
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
  // using the _id of MongoDB it searches correctly all the items but using the userId there is an issue
  try {
    const cart = await Cart.findById(req.headers.userid);
    // cart.items.map(el => {
    //   if(el.productId === req.headers.productid) {
    //     console.log(el.productId)
    //   }
    // })
    // res.send(cart)
    Cart.findOneAndUpdate({ _id: req.headers.userId, 'items.productId': 'jes' }, {$set: { 'items.productId': 'pyka' }}, (err, succ) => {
      if(err) {
        console.log('error')
        res.send(err)
      } else {
        console.log(succ)
        res.send(succ)
      }
    })
  } catch (error) {
    console.log('catch')
    res.send(error)
  }
}

exports.removeItemFromCart = async (req, res) => {

}