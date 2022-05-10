import React, { useContext } from 'react'
import FilterProducts from './FilterProducts'
import ProductList from './ProductList'
import { Alert, Box, Flex, Grid, GridItem, UnorderedList } from '@chakra-ui/react'
import { alertContext } from '../contexts/alertContext'

const Home = () => {

  const { alertMessage } = useContext(alertContext)

  return (
    <>
      <Flex style={{ position: 'fixed', width: '100%', display: alertMessage.message !== '' ? 'flex' : 'none', marginTop: '5rem'}} alignItems='center' justifyContent='center'>
        <Alert status={alertMessage.type} colorScheme='green' w='25rem' fontWeight='bold' boxShadow='2xl' alignItems='center'>
          {alertMessage.message}
        </Alert>
      </Flex>
      <Box className='main-section'>
        <Box className='categories' pt='20'>
          <UnorderedList styleType='none' w='90%' m='auto'>
            {/* <Flex justify='center' fontSize='2xl'>
              <ListItem>Shoes</ListItem>
              <ListItem>Clothes</ListItem>
            </Flex> */}
          </UnorderedList>
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
    </>
  )
}

export default Home
