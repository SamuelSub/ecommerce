import React from 'react';

const FilterProducts = () => {
  return (
    <div className='filter-container'>
      <h1>Filter Section</h1>
      <ul className='price-list'>
        <li><h2>Price</h2></li>
        <li>0-20 <input type="checkbox"/></li>
        <li>0-40 <input type="checkbox"/></li>
        <li>0-60 <input type="checkbox"/></li>
        <li>0-80 <input type="checkbox"/></li>
        <li>0-100 <input type="checkbox"/></li>
        <li>0-120 <input type="checkbox"/></li>
      </ul>
      <ul className='brands-list'>
        <li><h2>Brands</h2></li>
        <li>Adidas <input type="checkbox"/></li>
        <li>Nike <input type="checkbox"/></li>
        <li>Under Armour <input type="checkbox"/></li>
        <li>Reebok <input type="checkbox"/></li>
      </ul>
    </div>
  )
}

export default FilterProducts