import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem, Image, Button, Heading, Flex, Spacer, Box, HStack, UnorderedList, ListItem, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { cartContext } from '../contexts/cartContext';

const Cart = () => {

  const { cart, dispatchCart, total, setTotal } = useContext(cartContext);

  const handleDelete = item => {
    dispatchCart({ type: 'remove', payload: item._id });
  }

  return (
    <Menu>
      <MenuButton fontSize='md' fontWeight='medium'>Cart</MenuButton>
      <MenuList color='black'>
        {cart.length > 0 ? (
          cart.map(item => (
            <MenuItem key={item._id} cursor='default'>
              <Flex w='15rem' align='center'>
                <Image boxSize='3rem' borderRadius='full' src={item.imageLink} mr='1rem'></Image>
                <Heading size='sm'>{item.name}</Heading>
                <h3>quantity: {item.quantity}</h3>
                <Spacer />
                <div onClick={() => handleDelete(item)}><DeleteIcon color='red' cursor='pointer'/></div>
              </Flex>
            </MenuItem>
          ))
        ) : (
          <MenuItem>
            <Heading size='sm'>No Items In Your Cart</Heading>
          </MenuItem>
        )}
        <hr />
       {cart.length > 0 && (
       <MenuItem>
          <Stat>
              <Flex justifyContent='space-between' alignItems='center'>
                <Link to='/cart'><Heading fontSize='md' color='green.700' fontWeight='bold'>Go To Checkout</Heading></Link>
                <Box>
                  <StatLabel>Total</StatLabel>
                  <StatNumber>{total}</StatNumber>
                </Box>
              </Flex>
          </Stat>
       </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default Cart