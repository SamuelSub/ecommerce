const express = require('express');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  try {
    // destructure email and password vars from req.body
    const { email, password } = req.body;

    // find user based on the given email
    const user = await User.findOne({ email: email });

    // check if user exists
    if(user) {
      const validPass = await bcrypt.compare(password, user.password);

      if(validPass) {

        // Create token with the payload being the user id and the user email then return the user and the token so the client can save the token in their local storage
        const token = await jwt.sign({
          payload: { id: user._id, email: user.email }
        }, process.env.SECRET_TOKEN, { expiresIn: '2h' })

        res.send({
          user,
          token
        });

      } else {
        res.send('Password Incorrect')
      }

    } else {
      res.send('User Not Found');
    }
  } catch (error) {
    res.send(error)
  }
}

exports.register = async (req, res) => {
  
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

    // Create token with the payload being the user id and the user email then return the user and the token so the client can save the token in their local storage
    const token = await jwt.sign({
      payload: { id: user._id, email: user.email }
    }, process.env.SECRET_TOKEN, { expiresIn: '2h' })

    res.send({
      user,
      token
    });

  } catch (error) {
    res.send(error)
  }
}