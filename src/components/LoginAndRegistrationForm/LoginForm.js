import React from 'react';

const LoginForm = ({
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleSignIn,
    clearEmailAndPassError,
    loginEmailError,
    loginPasswordError,
    resetPassword


}) => {
    return (
        <div id="form-container">
            <form id="login-form" onSubmit={handleSignIn}>
            <div className="input-field-style">
            <input
                        style={{
                            color: loginEmailError ? 'red' : 'black',
                            fontWeight: loginEmailError ? 'bold' : 'normal',
                        }}
                        className="input-style"
                        name="email"
                        type="email"
                        value={loginEmailError ? loginEmailError : loginEmail}
                        required
                        autoFocus
                        onFocus={clearEmailAndPassError}
                        placeholder="E-postadress"
                        onChange={(e) => setLoginEmail(e.target.value)}
            />
            </div>
            <div className="input-field-style">
                    <input
                        style={{
                            color: loginPasswordError ? 'red' : 'black',
                            fontWeight: loginPasswordError ? 'bold' : 'normal',

                        }}
                        className="input-style"
                        name="password"
                        placeholder="Lösenord"

                        required
                        onFocus={clearEmailAndPassError}
                        onClick={clearEmailAndPassError}
                        onKeyPress={clearEmailAndPassError}
                        type={loginPasswordError ? 'text' : 'password'}
                        value={
                            loginPasswordError
                                ? loginPasswordError
                                : loginPassword
                        }
                        onChange={(e) => setLoginPassword(e.target.value)}
                    />
                </div>
                

                <div className="form-bottom">
                    <button className="form-button-style" type="submit" onClick={handleSignIn}>
                        Logga in
                    </button>


                    <span className="cursor-button" onClick={resetPassword}>
                        Glömt lösenord?
                    </span>
                </div>
            </form>
        </div>
    );
  }
  
  export default  LoginForm;  