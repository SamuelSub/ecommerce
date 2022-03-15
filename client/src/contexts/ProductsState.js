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
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filters, dispatchFilters] = useReducer(filterReducer, filterProducts);

  const getProducts = async () => {
    let call;
    let res;

    if(filters.price === 'all') {
      call = await fetch('/api/products')
      res = await call.json();
    } 
    
    if(filters.price !== 'all') {
      call = await fetch(`/api/products/filters?price=${filters.price}`);
      res = await call.json();
    }

    if(filters.price === 'all' && filters.brands.length > 0) {
      call = await fetch(`/api/products/filters?brands=${filters.brands}`);
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
      state,
      dispatch,
      filters,
      dispatchFilters
    }}>
      {props.children}
    </productsContext.Provider>
  )
}

export default ProductsState