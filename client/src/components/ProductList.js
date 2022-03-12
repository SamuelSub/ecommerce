import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';
import ProductItem from './ProductItem';

const ProductList = () => {

  const { products } = useContext(productsContext);

  return (
    <Box > 
      <Heading fontSize='xl' mb='5'>Products</Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={3}>
        {products ? products.map((item) => (
          <GridItem key={item._id} h='100%' borderRadius={5}>
            <ProductItem item={item} key={item._id}/>
          </GridItem>
        )) : ''}
      </Grid>
    </Box>
  )
}

export default ProductList