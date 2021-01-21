import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {auth} from '../firebase/firebase.utils';
// import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {

  const linkStyle = () => {
    return { margin: "10px" };
  };
  // const authContext = useContext(AuthContext);
  const authContext = false;
  let history = useHistory();

  const LogOutButton = () => {
    // authContext.setIsAuthenticated(false);
    return(

      <>
         <button style={linkStyle()} onClick={() => 
          auth.signOut()
          .then(() => localStorage.clear())
          .then(() => history.push('/'))

          }>
            Logout
          </button>
      </>
    )
  };

  const loginButtonAndRegisterButton = () => {


return(
//Visa registreringsmodal, loginmodal om man trycker på knapparna
  <>
  
  <button>Register</button>
  
  <button>Login</button>
  </>
)
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
          <LogOutButton/>
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
