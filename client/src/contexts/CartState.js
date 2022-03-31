import React, { useReducer, useState } from 'react'
import { useEffect } from 'react';
import { cartContext } from './cartContext';
import { reducer } from './cartReducer';

const CartState = props => {

  const initialState = [];

  const [cart, dispatchCart] = useReducer(reducer, initialState);
  const [total, setTotal] = useState(0);

  let sum = 0;

  useEffect(() => {
    setTotal(sum);
    cart.map(item => sum += item.price);
    setTotal(sum);
  }, [cart])

  return (
    <cartContext.Provider value={{
      cart,
      dispatchCart,
      total,
      setTotal
    }}>
      {props.children}
    </cartContext.Provider>
  )
}

export default CartState