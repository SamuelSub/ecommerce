import React, { useState, useEffect } from 'react'

const ProductList = () => {

  const [products, setProducts] = useState();

  const getProducts = async () => {
    const call = await fetch('/api/products')
    const res = await call.json();
    setProducts(res);
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <div className='product-list-container'> 
      <h2>List of Products</h2>
      <div className='products-list'>
        {products ? products.map((item) => (
          <div className='product-card' key={item._id}>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h4>{item.description}</h4>
            <img src={item.imageLink}></img>
          </div>
        )) : ''}
      </div>
    </div>
  )
}

export default ProductList
