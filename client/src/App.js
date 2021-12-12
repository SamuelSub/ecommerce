import './App.css';
import Navbar from './components/Navbar';
import { Fragment } from 'react';
import Home from './components/Home';
import React from 'react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
