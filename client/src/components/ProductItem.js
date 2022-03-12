import React, { useContext} from 'react';
import { productsContext } from '../contexts/productsContext';
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';

const ProductItem = ({ item }) => {

  const { state, dispatch } = useContext(productsContext);

  return (
    <Box key={item._id} h='100%' boxShadow='xl' borderRadius='sm' align='center'>
      <Image src={item.imageLink} alt=''></Image>
      <Box p='6'>
        <Heading fontSize='md' onClick={() => console.log(state)}>{item.name}</Heading>
        <Text>{`${item.price}$`}</Text>
        <Text color='gray.500'>{item.description}</Text>
        <Stack direction='row'>
          {/* <Button onClick={() => dispatch({type: 'remove', payload: item._id})} colorScheme='red' variant='outline' size='sm'>Remove</Button> */}
          <Button onClick={() => dispatch({type: 'add', payload: item})} colorScheme='green' variant='outline' size='sm' w='100%'>Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProductItem