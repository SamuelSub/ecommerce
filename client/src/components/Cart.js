import React, { useContext } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Image, Button } from '@chakra-ui/react';
// import { AddIcon } from '@chakra-ui/icons';
import { productsContext } from '../contexts/productsContext';

const Cart = () => {

  const { cart, dispatchCart } = useContext(productsContext);

  return (
    <Menu>
      <MenuButton fontSize='md' fontWeight='medium'>Cart</MenuButton>
      <MenuList color='black'>
        {cart && (
          cart.map(item => (
            <MenuItem key={item._id}>
              <Image boxSize='3rem' borderRadius='full' src={item.imageLink} mr='1rem'></Image>
              {item.name}
              {/* <AddIcon onClick={() => dispatchCart({type: 'add'})}>Add</AddIcon> */}
              {/* <Button onClick={() => dispatchCart({type: 'remove'})}>Remove</Button> */}
            </MenuItem>
          ))
        )}
      </MenuList>
    </Menu>
  )
}

export default Cart