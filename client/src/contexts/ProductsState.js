import React, { useReducer, useState, useEffect } from 'react';
import { productsContext } from './productsContext';
import { reducer } from './cartReducer';
import { filterReducer } from './filterReducer';

const ProductsState = props => {

  const initialState = [];
  const filterProducts = {
    price: 'all',
    brands: []
  };

  const [products, setProducts] = useState();
  const [cart, dispatchCart] = useReducer(reducer, initialState);
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
    // Filter only based on brand
    if(filters.price === 'all' && filters.brands.length > 0) {
      call = await fetch(`/api/products/filters?brands=${filters.brands}`);
      res = await call.json();
    }
    // Filter based on price and brands
    if(filters.price !== 'all' && filters.brands.length > 0) {
      call = await fetch(`/api/products/filters?price=${filters.price}&brands=${filters.brands}`);
      res = await call.json();
    }

    return res
  }

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    // console.log(filters[0].price.range0to40)
    setProducts(null)
    getProducts(filters)
      .then(res => setProducts(res))
      .catch(err => console.log(err))
    console.log(filters)
  }, [filters])

  // Filter Products

  return (
    <productsContext.Provider value={{
      products,
      setProducts,
      cart,
      dispatchCart,
      filters,
      dispatchFilters
    }}>
      {props.children}
    </productsContext.Provider>
  )
}

export default ProductsState