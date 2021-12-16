import React, { useState, Fragment } from 'react'

const ProductList = () => {

  const [products, setProducts] = useState();

  const getProducts = () => {
    fetch('/api/products').then(response => {
      return response.json()
    }).then(data => setProducts(data))
  }

  return (
    <div className='product-list-container'> 
      <h2 onClick={() => {getProducts()}}>List of Products</h2>
      <div className='products-list'>
        {products ? products.map((item) => (
          <div className='product-card'>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h4>{item.description}</h4>
            <img src={item.imageLink}></img>
          </div>
        )) : 'no'}
      </div>
    </div>
  )
}

export default ProductList
