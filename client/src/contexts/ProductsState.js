import React, { useReducer, useState, useEffect } from 'react';
import { productsContext } from './productsContext';
import { reducer } from './cartReducer';

const ProductsState = props => {

  const initialState = []

  const [products, setProducts] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    const call = await fetch('/api/products')
    const res = await call.json();
    return res
  }

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res))
      .catch(err => console.log(err))
  }, []);


  return (
    <productsContext.Provider value={{
      products,
      setProducts,
      state,
      dispatch
    }}>
      {props.children}
    </productsContext.Provider>
  )
}

export default ProductsState