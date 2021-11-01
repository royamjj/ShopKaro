import './App.css';
import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';


import {HomeScreen} from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import CartScreen from './screen/CartScreen';
import LoginScreen from './screen/LoginScreen';
function App() {
  return (
    <Router>
      <Route component={HomeScreen} path="/" exact />
      <Route component={ProductScreen} path="/products/:id"/>
      <Route component={CartScreen} path="/cart"/>
      <Route component={LoginScreen} path="/login"/>
    </Router>
  );
}

export default App;