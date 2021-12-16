import React from 'react'
import FilterProducts from './FilterProducts'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div className='main-section'>
      <h1>Products</h1>
      <div className='products-container'>
        <FilterProducts />
        <ProductList />
      </div>
    </div>
  )
}

export default Home
