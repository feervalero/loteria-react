import React from 'react';
//import logo from './logo.svg';
import Menu from './breadCrumb/Menu'
import Footer from './breadCrumb/Footer'
import Home from './Pages/Home'
import Products from './Pages/Products'
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetail from './Pages/ProductDetail';
import Barajear from './Pages/Barajear';
import Tablas from './Pages/Tablas';
import Header from './breadCrumb/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header appTitle="Loteria Mexicana"/>
          <div className="app-container">
          <Route exact path="/home" >
            <Home componentName = "ComponentName" />
          </Route>
          <Route path="/products" component={Products} />
          <Route path="/tablas" component={Tablas} />
          <Route path="/barajear" component={Barajear} componentName="Barajear"/>
          <Route path="/productdetail/:message" component={ProductDetail} />
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
