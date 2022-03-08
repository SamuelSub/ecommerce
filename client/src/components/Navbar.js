import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1><Link to='/' className='logo'>Samuel's Shop</Link></h1>
      <ul>
        <li><Link to='register' className='register-link'>Sign Up</Link></li>
        <li><Link to='login' className='login-link'>Log In</Link></li>
        <li><Link to='/' className='products-link'>Products</Link></li>
        <li><Link to='/cart' className='cart-link'>Cart</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
