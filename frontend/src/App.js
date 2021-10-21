import './App.css';
import React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';


import {HomeScreen} from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

function App() {
  return (
    <Router>
      <Route component={HomeScreen} path="/" exact />
      <Route component={ProductScreen} path="/product/:id"/>
    </Router>
  );
}

export default App;