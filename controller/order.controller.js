const express = require('express');
const mongoose = require('mongoose');
const Order = require('../model/orderSchema');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findById(req.params.id);

    res.send(orders);
  } catch (error) {
    res.send(error)
  }
}

exports.addOrder = async (req, res) => {
  try {
    
    const order = new Order({ userId: req.params.id, items: req.body.items, bill: req.body.bill, dateAdded: req.body.dateAdded});

    await order.save();

    res.send(order);

  } catch (error) {
    console.log(error.message)
    res.send(error);
  }
}

exports.removeOrders = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndRemove(req.params.id);

    res.send(deleted);
  } catch (error) {
    console.log(error);
    res.send(error)
  }
}