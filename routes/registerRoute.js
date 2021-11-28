const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {

  if (!(req.body.email && req.body.password && req.body.firstName && req.body.lastName)) {
    return res.status(400).send({ error: "Data not formatted properly" });
  }

  try {
    // Creating a new user from userSchema
    const user = await new User(req.body);

    // generate salt for hashing
    const salt = await bcrypt.genSalt(10);
    // hash the user given password and add the salt
    user.password = await bcrypt.hash(user.password, salt);
    // save password to db
    await user.save();

    res.send(user);
    
  } catch (error) {
    res.send(error)
  }
})

module.exports = router;