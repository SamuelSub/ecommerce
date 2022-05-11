import React, { useState, useContext } from 'react';
import { Button, Box, FormLabel, FormControl } from '@chakra-ui/react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { alertContext } from '../contexts/alertContext'

const CheckoutForm = ({ total }) => {

  const [isPaidClicked, setIsPaidClicked] = useState(false)
  const stripe = useStripe();
  const elements = useElements();
  const { setAlertMessage } = useContext(alertContext)

  const handleSubmit = async (event) => {
    setIsPaidClicked(true)
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement, CardCvcElement, CardExpiryElement),
    });

    if(error) {
      setIsPaidClicked(false)
      console.log(error)
    }
    console.log(total)
    if(paymentMethod) {
      const { id } = paymentMethod
      const { data } = await axios.post('/api/checkout', {
        id,
        amount: total
      })
      console.log(data)
      setAlertMessage({ type: 'success', payload: 'Payment Completed Successfully!' });
      setTimeout(() => {
        setAlertMessage({ type: 'clear' })
      }, 2000);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel htmlFor="card-number" >Card Number</FormLabel>
        <Box p={3} border='1px solid #ccc' mt={2} mb={2} borderRadius={5} name='card-number'>
          <CardNumberElement />
        </Box>
        <FormLabel htmlFor="card-expiry" >Card Expiry</FormLabel>
        <Box p={3} border='1px solid #ccc' mt={2} mb={2} borderRadius={5} name='card-expiry'>
          <CardExpiryElement />
        </Box>
        <FormLabel htmlFor="card-cvc" >Card CVC</FormLabel>
        <Box p={3} border='1px solid #ccc' mt={2} mb={2} borderRadius={5} name='card-cvc'>
          <CardCvcElement />
        </Box>
        <Button variant='outline' color='green' w='100%' mt='1rem' type="submit" isDisabled={isPaidClicked ? true : false}>Pay</Button>
      </FormControl>
    </form>
  );
};

export default CheckoutForm