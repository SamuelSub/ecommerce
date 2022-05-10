import React, { useContext } from 'react';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { Text, Flex, ListItem, Spacer, UnorderedList, Badge } from '@chakra-ui/react';
import { cartContext } from '../contexts/cartContext';

const Navbar = () => {

  const { cart } = useContext(cartContext)

  return (
    <Flex w='100%' bg='gray.400' p='4' boxShadow='lg' position='fixed' top='0' zIndex='50'>
      <Flex w='90%' m='auto' align='space-between' color='white' alignItems='center'>
        <Text fontSize='2xl'><Link to='/'>Samuel's Shop</Link></Text>
        <Spacer />
          <UnorderedList styleType='none' alignContent='flex'>
            <Flex>
              {/* <ListItem ml='2'><Link to='register'>Sign Up</Link></ListItem>
              <ListItem ml='2'><Link to='login'>Log In</Link></ListItem> */}
              <ListItem ml='2'><Link to='/'>Products</Link></ListItem>
              <ListItem ml='2'><Cart /></ListItem>
              <ListItem ml='2'><Badge variant='outline'>{cart.length}</Badge></ListItem>
            </Flex>
          </UnorderedList>
      </Flex>
    </Flex>
  )
}

export default Navbar
