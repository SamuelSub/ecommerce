import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthState from './contexts/AuthState';
import ProductsState from './contexts/ProductsState';
import CartState from './contexts/CartState';
import CartOverview from './components/CartOverview';
import AlertState from './contexts/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ProductsState> 
          <CartState>
            <Router>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/cart' element={<CartOverview />}/>
              </Routes>  
            </Router>
          </CartState>
        </ProductsState>
      </AlertState>
    </AuthState>
  );
}

export default App;
