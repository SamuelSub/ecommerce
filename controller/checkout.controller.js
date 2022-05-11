const express = require('express');

exports.makePayment = async (req, res) => {

  try {
    // This is your test secret API key.
    const stripe = require('stripe')
    (process.env.STRIPE_SECRET_KEY);

    const { id, amount } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      payment_method: id,
      confirm: true
    });

    res.send({
      status: paymentIntent.status,
    });

  } catch (error) {
    res.send(error)
  }
}