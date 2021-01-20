import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {auth} from '../firebase/firebase.utils';
// import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {

  const linkStyle = () => {
    return { margin: "10px" };
  };
  // const authContext = useContext(AuthContext);
  const authContext = true;
  let history = useHistory();

  const logOut = () => {
    // authContext.setIsAuthenticated(false);
  };

  const authNavBar = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <NavLink to="/">
            <p style={linkStyle()}>Home</p>
          </NavLink>
          
          <NavLink to="/portfolio">
           <p style={linkStyle()}>Portfolio</p>
          </NavLink>

          <NavLink to="/account">
            <p style={linkStyle()}>Account</p>
          </NavLink>
        </div>
        <div style={{ display: "flex" }}>
          <button style={linkStyle()} onClick={() => 
          auth.signOut()
          .then(() => localStorage.clear())
          .then(() => history.push('/'))



          }>
            Logout
          </button>
        </div>
      </>
    );
  };

  const unAuthNavBar = () => {
    return (
      <>
        <div style={{ display: "flex" }}>
          <NavLink to="/">
            <p style={linkStyle()}>Market</p>
          </NavLink>
          <NavLink to="/login">
            <p style={linkStyle()}>Login</p>
          </NavLink>
          <NavLink to="/register">
            <p style={linkStyle()}>Register</p>
          </NavLink>
        </div>
        <NavLink to="/checkout">
          <p style={linkStyle()}>Checkout</p>
        </NavLink>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          padding: "10px 20px 0px 20px",
        }}
      >
        {authContext ? authNavBar() : unAuthNavBar() }
      </div>
    </>
  );
};

export default NavBar;
