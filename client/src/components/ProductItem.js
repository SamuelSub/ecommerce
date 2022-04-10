import React, { useContext} from 'react';
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { cartContext } from '../contexts/cartContext';

const ProductItem = ({ item }) => {

  const { dispatchCart } = useContext(cartContext);
  // Set initial value of quantity to 0
  item.quantity = 0;

  return (
    <Box key={item._id} h='100%' boxShadow='xl' borderRadius='sm' align='center'>
      <Image src={item.imageLink} alt=''></Image>
      <Box p='6'>
        <Heading fontSize='md'>{item.name}</Heading>
        <Text>{`${item.price}$`}</Text>
        <Text color='gray.500'>{item.description}</Text>
        <Stack direction='row'>
          <Button onClick={() => dispatchCart({type: 'add', payload: item})} colorScheme='green' variant='outline' size='sm' w='100%'>Add To Cart</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ProductItem