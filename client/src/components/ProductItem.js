import React, { useContext} from 'react';
import { productsContext } from '../contexts/productsContext';

const ProductItem = ({ item }) => {

  const { state, dispatch } = useContext(productsContext);

  return (
    <div>
      <div className='product-card' key={item._id}>
        <h2 onClick={() => console.log(state)}>{item.name}</h2>
        <h3>{item.price}</h3>
        <h4>{item.description}</h4> 
        <img src={item.imageLink} alt=''></img>
        <button onClick={() => dispatch({type: 'remove', payload: item._id})}>Remove</button>
        <button onClick={() => dispatch({type: 'add', payload: item})}>Add To Cart</button>
      </div>
    </div>  
  )
}

export default ProductItem