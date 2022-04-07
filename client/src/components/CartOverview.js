import { Heading, UnorderedList, ListItem, Box, Flex, Image, Spacer, Grid, Stack } from '@chakra-ui/react'
import { cartContext } from '../contexts/cartContext'
import { DeleteIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'

const CartOverview = () => {

  const { cart, dispatchCart, total } = useContext(cartContext);

  const handleDelete = item => {
    dispatchCart({ type: 'remove', payload: item._id });
  }

  return (
    <Grid w='88%' m='auto' py='5rem' gridTemplateColumns='1fr 1fr'>
      <Box>
        <Heading fontSize='2xl' textAlign='center' py='3rem'>Your Cart</Heading>
        <UnorderedList listStyleType='none' >
          <Stack spacing={10}>
            {cart.map(item => (
              <ListItem key={item._id} cursor='default'>
                <Flex>
                  <Image boxSize='3rem' borderRadius='full' src={item.imageLink} mr='1rem'></Image>
                  <Heading size='sm'>{item.name}</Heading>
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
        <Heading fontSize='2xl' textAlign='center' py='3rem'>Address Details</Heading>
      </Box>
    </Grid>
  )
}

export default CartOverview