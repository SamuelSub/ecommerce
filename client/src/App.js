import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthState from './contexts/AuthState';
import ProductsState from './contexts/ProductsState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ProductsState> 
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/login' element={<Login />}/>
            {/* <Route path='/cart' element={<Cart />}/> */}
          </Routes>
        </Router>
      </ProductsState>
    </AuthState>
  );
}

export default App;
