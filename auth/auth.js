const express = require('express');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

  const token = req.headers.key;

  if(!token) {
    res.send('No token provided')
  } else {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
      console.log(decoded.email)
    })
    next();
  }

}

module.exports = auth;