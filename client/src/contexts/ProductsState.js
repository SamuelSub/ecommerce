import React, { useReducer, useState, useEffect } from 'react';
import { productsContext } from './productsContext';
import { filterReducer } from './filterReducer';

const ProductsState = props => {

  const filterProducts = {
    price: 'all',
    brands: []
  };

  const [products, setProducts] = useState();
  const [filters, dispatchFilters] = useReducer(filterReducer, filterProducts);

  const getProducts = async () => {
    let call;
    let res;

    // Fetch all the products 
    if(filters.price === 'all') {
      call = await fetch('/api/products')
      res = await call.json();
    } 

    // Filter only based on price
    if(filters.price !== 'all') {
      call = await fetch(`/api/products/filters?price=${filters.price}`);
      res = await call.json();
    }

    // Filter only based on brand or multiple brands
    if(filters.price === 'all' && filters.brands.length > 0) {
      call = await fetch(`/api/products/filters?brands=${filters.brands[0]}&brands=${filters.brands[1]}&brands=${filters.brands[2]}&brands=${filters.brands[3]}`);
      res = await call.json();
    }

    // Filter based on price and brands
    if(filters.price !== 'all' && filters.brands.length > 0) {
      call = await fetch(`/api/products/filters?price=${filters.price}&brands=${filters.brands}`);
      res = await call.json();
    }

    // Filter only based on price and multiple brands
    if(filters.price !== 'all' && filters.brands.length > 1) {
      call = await fetch(`/api/products/filters?price=${filters.price}&brands=${filters.brands[0]}&brands=${filters.brands[1]}&brands=${filters.brands[2]}&brands=${filters.brands[3]}`);
      res = await call.json();
    }

    return res
  }

  // Fetch all the products on initial load
  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, []);

  // Every time the filters state changes re-render the products based on the filtering
  useEffect(() => {
    setProducts(null)
    getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, [filters])

  return (
    <productsContext.Provider value={{
      products,
      setProducts,
      filters,
      dispatchFilters
    }}>
      {props.children}
    </productsContext.Provider>
  )
}

export default ProductsState