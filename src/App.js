import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/navbar';
import Account from "./components/Account";
import Portfolio from "./components/Portfolio.js";
import MainPage from './components/MainPage.js';
import Login from './components/Pages/Login.js';
import Register from './components/Pages/Register.js';


const App = () => {
  return (
    <Router>
    <NavBar />
    <div style={{ padding: "0px 20px" }}>
      <Route exact path="/"  component={MainPage}/>
      <Route path="/account" component={Account} />
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
  );
}

export default App;
