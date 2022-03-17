import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';

const FilterProducts = () => {
  const { dispatchFilters } = useContext(productsContext);

  const handleChange = e => {
    let params = String(e.target.checked + ' ' + e.target.value);
    dispatchFilters({ type: params });
  }

  return (
    <Box>
      <Heading fontSize='xl' mb='5'>Filters</Heading>
      <UnorderedList styleType='none' onClick={(e) => handleChange(e)}>
        <ListItem><Heading fontSize='lg'>Price</Heading></ListItem>
        <ListItem><input type="checkbox" value='upto40'/> Up to 40 </ListItem>
        <ListItem><input type="checkbox" value='40to80'/> 40-80 </ListItem>
        <ListItem><input type="checkbox" value='80to120'/> 80-120 </ListItem>
        <ListItem><input type="checkbox" value='120to160'/> 120-160 </ListItem>
        <ListItem><input type="checkbox" value='over160'/> Over 160 </ListItem>
      </UnorderedList>
      <UnorderedList styleType='none' onClick={(e) => handleChange(e)}>
        <ListItem><Heading fontSize='lg'>Brands</Heading></ListItem>
        <ListItem><input type="checkbox" value='adidas'/> Adidas</ListItem>
        <ListItem><input type="checkbox" value='nike'/> Nike</ListItem>
        <ListItem><input type="checkbox" value='under armour'/> Under Armour</ListItem>
        <ListItem><input type="checkbox" value='new balance'/> New Balance</ListItem>
      </UnorderedList>
    </Box>
  )
}

export default FilterProducts