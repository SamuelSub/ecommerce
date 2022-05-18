import { Heading, UnorderedList, ListItem, Box, Flex, Image, Spacer, Grid, Stack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { cartContext } from '../contexts/cartContext'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CartOverview = () => {

  const { cart, dispatchCart, total } = useContext(cartContext);
  

  const handleDelete = item => {
    dispatchCart({ type: 'remove', payload: item._id });
  }

  return (
    <Grid w='88%' m='auto' py='5rem' gridTemplateColumns='1fr 1fr' gap={10}>
      <Box>
        <Heading fontSize='2xl' textAlign='center' py='3rem'>Your Cart</Heading>
        <UnorderedList listStyleType='none' >
          <Stack spacing={10}>
            {cart.map(item => (
              <ListItem key={item._id} cursor='default'>
                <Flex>
                  <Image boxSize='3rem' borderRadius='full' src={item.imageLink} mr='1rem'></Image>
                  <Stack>
                    <Heading size='sm'>{item.name}</Heading>
                    <Heading size={'xs'}>Quantity: {item.quantity}</Heading>
                  </Stack>
                  <Spacer />
                  <div onClick={() => handleDelete(item)}><DeleteIcon color='red' cursor='pointer'/></div>
                </Flex>
              </ListItem>
            ))}
            <ListItem>Total: {total}</ListItem>
          </Stack>
        </UnorderedList>
      </Box>
      <Box>
        <Heading fontSize='2xl' textAlign='center' py='3rem'>Details</Heading>
        <FormControl isRequired>
          <FormLabel htmlFor='first-name'>First name</FormLabel>
          <Input id='first-name' placeholder='First Name' />
          <FormLabel htmlFor='last-name'>Last name</FormLabel>
          <Input id='last-name' placeholder='Last Name' />
          <FormLabel htmlFor='city'>City</FormLabel>
          <Input id='city' placeholder='City'/>
          <FormLabel htmlFor='Address'>Address</FormLabel>
          <Input id='address' placeholder='Address' />
          <FormLabel htmlFor='zip-code'>Zip Code</FormLabel>
          <Input id='city' placeholder='Zip Code' />
          <FormLabel htmlFor='email'>E-mail</FormLabel>
          <Input id='email' placeholder='E-mail' />
        </FormControl>
        <Elements stripe={stripePromise}>
          <CheckoutForm total={total}/>
        </Elements>
      </Box>
    </Grid>
  )
}

export default CartOverview