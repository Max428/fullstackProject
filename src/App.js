import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/navbar';
import Account from "./components/Account";
import StockSite from './components/StockSite.js';



const App = () => {
  return (
    <Router>
    <NavBar />
    <div style={{ padding: "0px 20px" }}>
      <Route exact path="/"  />
      <Route path="/account" component={Account} />
      <Route path="/login" />
      <Route path="/register" />
    </div>
  </Router>
  );
}

export default App;
