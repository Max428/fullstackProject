import React, {useEffect, useState,useContext} from 'react'
import { firestore } from '../firebase/firebase.utils.js';
import { AuthContext } from "../contexts/AuthContext";
const Account = () =>{

const FirstName = "Max";
const authContext = useContext(AuthContext);

useEffect(() => {

    //ATT GÖRA: MÅSTE FÅ ID FRÅN AUTHCONTEXT SÅ DEN VISAR RÄTT USER

    // firestore
    // .collection('users')
    // .doc(userid)
    // .get()
    // .then((res) => {
    //     setUser({
    //         ...res.data()
    //     });
    // })
    // .catch((err) => alert(err.message));


}, [])




    return (
<>
<h1>Account page</h1>
    <p>Welcome {FirstName}!</p>
</>

    )


}

export default Account;