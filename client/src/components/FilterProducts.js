import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { productsContext } from '../contexts/productsContext';

const FilterProducts = () => {
  const { dispatchFilters, filters } = useContext(productsContext);

  const handleChange = e => {
    let params = String(e.target.checked + ' ' + e.target.value);
    dispatchFilters({ type: params });
  }

  return (
    <Box>
      <Heading fontSize='xl' mb='5' onClick={() => console.log(filters[0]['price'])}>Filters</Heading>
      <UnorderedList styleType='none' onClick={(e) => handleChange(e)}>
        <ListItem><Heading fontSize='md'>Price</Heading></ListItem>
        <ListItem>Up to 40 <input type="checkbox" value='Up to 40'/></ListItem>
        <ListItem>40-80 <input type="checkbox" value='40-80'/></ListItem>
        <ListItem>80-120 <input type="checkbox" value='80-120'/></ListItem>
        <ListItem>120-160 <input type="checkbox" value='120-160'/></ListItem>
        <ListItem>Over 160 <input type="checkbox" value='Over 160'/></ListItem>
      </UnorderedList>
      <UnorderedList styleType='none'>
        <ListItem><Heading fontSize='md'>Brands</Heading></ListItem>
        <ListItem>Adidas <input type="checkbox"/></ListItem>
        <ListItem>Nike <input type="checkbox"/></ListItem>
        <ListItem>Under Armour <input type="checkbox"/></ListItem>
        <ListItem>Reebok <input type="checkbox"/></ListItem>
      </UnorderedList>
    </Box>
  )
}

export default FilterProducts