import React, {useEffect, useState,useContext} from 'react'
import { firestore } from '../firebase/firebase.utils.js';
import { AuthContext } from "../contexts/AuthContext";
const Account = () =>{

const FirstName = "Max";
const authContext = useContext(AuthContext);

useEffect(() => {


}, [])




    return (
<>
<h1>Account page</h1>
    <p>Welcome {FirstName}!</p>
</>

    )


}

export default Account;