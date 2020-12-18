import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/navbar';
import Account from "./components/Account";
import Portfolio from "./components/Portfolio.js";
import MainPage from './components/MainPage.js';



const App = () => {
  return (
    <Router>
    <NavBar />
    <div style={{ padding: "0px 20px" }}>
      <Route exact path="/"  component={MainPage}/>
      <Route path="/account" component={Account} />
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/login" />
      <Route path="/register" />
    </div>
  </Router>
  );
}

export default App;
