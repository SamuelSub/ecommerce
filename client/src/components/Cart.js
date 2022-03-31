import React, { useContext } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Image, Button, Heading, Stack, Flex, Spacer, Box, HStack, UnorderedList, ListItem } from '@chakra-ui/react';
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
       {cart.length > 0 && (
       <MenuItem>
        <Stack>
          <Heading size='sm'>Total: {total}</Heading>
          <Heading size='sm'>View Your Cart</Heading>
        </Stack>
       </MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default Cart