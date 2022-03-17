import React, { useContext } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import { productsContext } from '../contexts/productsContext';

const Cart = () => {

  const { cart } = useContext(productsContext);

  return (
    <Menu>
      <MenuButton fontSize='md' fontWeight='medium'>Cart</MenuButton>
      <MenuList color='black'>
        {cart && (
          cart.map(item => (
            <MenuItem key={item._id}>
              <Image boxSize='3rem' borderRadius='full' src={item.imageLink} mr='1rem'></Image>
              {item.name}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  )
}

export default Cart