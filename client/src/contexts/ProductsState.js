import React, { useReducer, useState, useEffect } from 'react';
import { productsContext } from './productsContext';
import { reducer } from './cartReducer';
import { filterReducer } from './filterReducer';

const ProductsState = props => {

  const initialState = [];
  const filterProducts = [
    {
      price: {
        range0to40: false,
        range40to80: false,
        range80to120: false,
        range120to160: false,
        rangeOver160: false
      }
    },
    {
      brands: {
        adidas: false,
        nike: false,
        underArmour: false,
        rebook: false
      }
    }
  ];

  const [products, setProducts] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filters, dispatchFilters] = useReducer(filterReducer, filterProducts);

  const getProducts = async (params = null) => {
    let res;
    if(params === null) {
      const call = await fetch('/api/products')
      res = await call.json();
    } else if(params[0].price.range0to40){
      console.log(true)
      const call = await fetch(`/api/products`)
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