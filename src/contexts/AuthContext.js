import React, { createContext, useState, useEffect } from "react";
import {auth} from '../firebase/firebase.utils.js';

export const AuthContext = createContext();

export default ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        auth.onAuthStateChanged((user) => {
            if(user){
                getUserData(user.uid);
                setUser(user.uid)
                setIsAuthenticated(true);
                setIsLoaded(true);
            }
            else{
                setIsLoaded(true);
            }
        })
      }, []);

      const getUserData = (userId) => {
        setUser();
      }

      return (
        <div>
          {isLoaded ? (
            <AuthContext.Provider
              value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
            >
              {children}
            </AuthContext.Provider>
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      );
};

// export const AuthContext = createContext();

// export default ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <div>
//       <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   );
// };


// ----
// import React, { createContext, useState, useEffect } from "react";
// import AuthService from "../services/AuthService";

// export const AuthContext = createContext();

// export default ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     AuthService.isAuthenticated().then((data) => {
//       setUser(data.user);
//       setIsAuthenticated(data.isAuthenticated);
//       setIsLoaded(true);
//     });
//   }, []);

//   return (
//     <div>
//       {isLoaded ? (
//         <AuthContext.Provider
//           value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
//         >
//           {children}
//         </AuthContext.Provider>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   );
// };