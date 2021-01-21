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
    clearEmailAndPassError,
    regButton, 
    setDisableRegButton
}) => {

    return (
        <div id="register-container">
            <form id="register-form" onSubmit={handleSignUp}>

                <div className="input-field-style">
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
                onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
                
                <div className="input-field-style">
                <input 
                style={{
                    color: lastNameError ? 'red' : 'black',
                    fontWeight: lastNameError ? 'bold' : 'normal',
                }}
                className="input-style"
                name="lastname"
                placeholder="Efternamn"
                onFocus={clearEmailAndPassError}
                value={lastNameError ? lastNameError : lastName}
                onChange={(e) => setLastname(e.target.value)}
                />
                </div>
                
                <div className="input-field-style">
                <input 
                style={{
                color: registerEmailError ? 'red' : 'black',
                fontWeight: registerEmailError ? 'bold' : 'normal',
                 }}
                className="input-style"
                name="Email"
                placeholder="E-postadress"
                onFocus={clearEmailAndPassError}
                value={
                    registerEmailError ? registerEmailError : registerEmail
                }
                onChange={(e) => setRegisterEmail(e.target.value)}
                />
                </div>

                <div className="input-field-style">
                <input 
                style={{
                    color: registerPasswordError ? 'red' : 'black',
                    fontWeight: registerPasswordError ? 'bold' : 'normal',
                }}
                className="input-style"
                name="Password"
                placeholder="Lösenord"
                onFocus={clearEmailAndPassError}
                type={registerPasswordError ? 'text' : 'password'}
                value={
                    registerPasswordError
                        ? registerPasswordError
                        : registerPassword
                }
                onChange={(e) => setRegisterPassword(e.target.value)}/>
                </div>


                <div className="input-field-style">
                    <input
                        style={{
                            color: registerPasswordError ? 'red' : 'black',
                            fontWeight: registerPasswordError
                                ? 'bold'
                                : 'normal',
                        }}
                        className="input-style"
                        name="repeat-Password"
                        placeholder="Upprepa lösenord"
                        type={registerPasswordError ? 'text' : 'password'}
                        onFocus={clearEmailAndPassError}
                        value={
                            registerPasswordError
                                ? registerPasswordError
                                : confirmedPassword
                        }
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    />
                </div>



                <button 
                onClick={handleSignUp}
                disabled={regButton}
                >
                    
                    
                    Registrera</button>

            </form>
        </div>
    );
  }
  
  export default  RegistrationForm;  