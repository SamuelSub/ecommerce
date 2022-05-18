import React from 'react'
import FilterProducts from './FilterProducts'
import ProductList from './ProductList'
import { Box, Grid, GridItem, UnorderedList, Heading } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box className='main-section'>
 
      <Box className='categories' pt='20'>
        <UnorderedList styleType='none' w='90%' m='auto'>
          {/* <Flex justify='center' fontSize='2xl'>
            <ListItem>Shoes</ListItem>
            <ListItem>Clothes</ListItem>
          </Flex> */}
        </UnorderedList>
      </Box>

      <Box className='hero-image' pt='20' mb='5rem' height={300}>
        <Heading className='hero-text'>Biggest Collection On The Market</Heading>
      </Box>
  
      <Grid className='products-container' templateColumns='repeat(4, 1fr)' w='88%' m='auto'>
      
        <GridItem>
          <FilterProducts />
        </GridItem>
        <GridItem colSpan={3}>
          <ProductList />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Home
