import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Flex, ListItem, Spacer, UnorderedList } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex w='100%' bg='gray.400' p='4' boxShadow='lg' position='fixed' top='0' zIndex='50'>
      <Flex w='90%' m='auto' align='space-between' color='white' align='center'>
        <Text fontSize='2xl'><Link to='/'>Samuel's Shop</Link></Text>
        <Spacer />
          <UnorderedList styleType='none' alignContent='flex'>
            <Flex>
              <ListItem ml='2'><Link to='register'>Sign Up</Link></ListItem>
              <ListItem ml='2'><Link to='login'>Log In</Link></ListItem>
              <ListItem ml='2'><Link to='/'>Products</Link></ListItem>
              <ListItem ml='2'><Link to='/cart'>Cart</Link></ListItem>
            </Flex>
          </UnorderedList>
      </Flex>
    </Flex>
  )
}

export default Navbar
