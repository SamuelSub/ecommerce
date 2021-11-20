const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const mongoose = require('mongoose');

// GET existing user
router.get('/', async (req, res) => {
  try {
    const user = await User.find({
      'email': req.body.email,
      'password': req.body.password
    })

    if(user) {
      res.send(user)
    } else {
      res.send('Error User Not Created')
    }
  } catch (error) {
    res.send(error)
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    })

    await user.save();

    if(user) {
      res.send(user)
    }
  } catch (error) {
    res.send(error)
  }
})

module.exports = router;