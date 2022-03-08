import React, { useContext } from 'react';
import { productsContext } from '../contexts/productsContext';
import ProductItem from './ProductItem';

const ProductList = () => {

  const { products } = useContext(productsContext);

  return (
    <div className='product-list-container'> 
      <h2>List of Products</h2>
      <div className='products-list'>
        {products ? products.map((item) => (
          <ProductItem item={item} key={item._id}/>
        )) : ''}
      </div>
    </div>
  )
}

export default ProductList