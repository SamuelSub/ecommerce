import React from 'react'
import FilterProducts from './FilterProducts'
import ProductList from './ProductList'

const Home = () => {
  return (
    <div className='main-section'>
      <div className='categories'>
        <ul>
          <li>Shoes</li>
          <li>Clothes</li>
        </ul>
      </div>
      <div className='products-container'>
        <FilterProducts />
        <ProductList />
      </div>
    </div>
  )
}

export default Home
