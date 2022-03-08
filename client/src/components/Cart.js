import React, { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';

const Cart = () => {

  const { state } = useContext(productsContext)

  console.log(state);

  return (
    state.map(item => (
      <div className='cart-items'>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
      </div>

    ))
  )
}

export default Cart