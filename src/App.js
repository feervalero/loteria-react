import React from 'react';
//import logo from './logo.svg';
import Products from './Pages/Products'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';
import Barajear from './Pages/Barajear';
import Tablas from './Pages/Tablas';


function App() {
  return (
    <div>
      <Router>
          
          <div className="app-container">
          <Route path="/products" component={Products} />
          <Route path="/tablas" component={Tablas} />
          <Route path="/barajear" component={Barajear} componentName="Barajear"/>
          <Route path="/productdetail/:message" component={ProductDetail} />
          </div>
          
      </Router>
    </div>
  );
}

export default App;
