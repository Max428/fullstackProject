import React, {useEffect,useState} from 'react';

const RegistrationForm = ({
    
    handleSignUp,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    confirmedPassword,
    setConfirmedPassword,
    firstName,
    setFirstName,
    lastName,
    setLastname,
    registerEmailError,
    registerPasswordError,
    firstNameError,
    lastNameError,
    dropDownError,
    setTermsClicked,
    clearEmailAndPassError,
}) => {

    return (
        <div id="register-container">
            <form id="register-form" onSubmit={handleSignUp}>
                <input 
                style={{
                    color: firstNameError? 'red' :'black',
                    fontWeight: firstNameError ? 'bold' : 'black'
                }}
                className="input-style"
                name="firstname"
                placeholder="Förnamn"
                autoFocus
                onFocus={clearEmailAndPassError}
                value = {firstNameError ? firstNameError : firstName}
                onChange={(e) => setFirstName(e.target.value)}>

                </input>
                
                
                <input 
                name="lastname"
                placeholder="Efternamn"
                autoFocus
                onChange={(e) => setLastname(e.target.value)}></input>
                
                <input 
                name="Email"
                placeholder="Epostadress"
                autoFocus
                onChange={(e) => setRegisterEmail(e.target.value)}></input>

<input 
                name="Password"
                placeholder="Lösenord"
                autoFocus
                onChange={(e) => setRegisterPassword(e.target.value)}></input>

                <button onClick={handleSignUp}>Register</button>

            </form>
        </div>
    );
  }
  
  export default  RegistrationForm;  