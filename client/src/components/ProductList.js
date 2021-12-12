import React, { useState, Fragment } from 'react'

const ProductList = () => {

  const [products, setProducts] = useState();

  const getProducts = () => {
    fetch('/api/products').then(response => {
      return response.json()
    }).then(data => setProducts(data))
  }

  return (
    <Fragment> 
      <h2 onClick={() => {getProducts()}}>List of Products</h2>
      <div className='products-list'>
        {products ? products.map((item) => (
          <div className='product-card'>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
            <h4>{item.description}</h4>
          </div>
        )) : 'no'}
      </div>
    </Fragment>
  )
}

export default ProductList
