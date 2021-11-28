const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../model/userSchema');

router.post('/', async (req, res) => {
  try {
    // destructure email and password vars from req.body
    const { email, password } = req.body;

    // find user based on the given email
    const user = await User.findOne({ email: email });

    // check if user exists
    if(user) {
      const validPass = await bcrypt.compare(password, user.password);

      if(validPass) {
        res.send(user);
      } else {
        res.send('Password Incorrect')
      }

    } else {
      res.send('User Not Found');
    }

  } catch (error) {
    res.send(error)
  }
})

module.exports = router;