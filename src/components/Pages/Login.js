import React, {useState} from 'react';
import {auth} from '../../firebase/firebase.utils.js';
import LoginForm from '../LoginAndRegistrationForm/LoginForm.js';
import ForgetPasswordForm from '../LoginAndRegistrationForm/ForgottenPasswordForm.js';
const LoginPage = () => {
    
    ////#region Input values for login 
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    ////#region Errorhandling
    const [loginEmailError, setLoginEmailError] = useState('');
    const [loginPasswordError, setLoginPasswordError] = useState('')
    const [resetError, setResetError] = useState('');
    ////#endregion

    ////#region Showing reset password menu and handling
    const [resetPasswordMenu, setResetPasswordMode] = useState(false);
    const [forgetEmail, setForgetEmail] = useState('');
    const [resetPasswordSucess, setResetPasswordSuccess] = useState('');
    ////#endregion
    


    
    const clearEmailAndPassError = () => {
        setLoginEmailError('');
        setLoginPasswordError('');
    };

    
    const handleForgetPassword = (e) => {
        e.preventDefault();
        auth.sendPasswordResetEmail(forgetEmail)
            .then(() => {
                setResetPasswordSuccess('Kolla din e-postadress!');
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        setResetError('Ogiltig E-postadress!');
                        break;
                    default:
                        alert('Något gick fel!');
                }
            });
    };


    const handleSignIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(loginEmail, loginPassword).catch(
            (err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        setLoginEmailError('Ogiltig E-postadress!');
                        break;
                    case 'auth/user-disabled':
                        setLoginEmailError('Användaren är inaktiverad!');
                        break;
                    case 'auth/user-not-found':
                        setLoginEmailError('Kan inte hitta användaren!');
                        break;
                    case 'auth/wrong-password':
                        setLoginPasswordError('Fel lösenord!');
                        break;
                    default:
                        alert('något gick fel!');
                }
            }
        );
    };



    return (
        <div>
            <h1>Logga in</h1>

            {resetPasswordMenu ?      
            
            <ForgetPasswordForm

            email={forgetEmail}
            setEmail={setForgetEmail}
            resetPasswordSucess={resetPasswordSucess}
            resetError={resetError}
            handleForgetPassword={handleForgetPassword}
            resetPasswordMenu={resetPasswordMenu}
            setResetPasswordMode={setResetPasswordMode}
            ForgetPassToggle={resetPasswordMenu}
            clearErrors={clearEmailAndPassError}
            handleReset={() => setResetPasswordMode(false)}
            forgetPassDeactive={() => setResetPasswordMode(false)}
            
            />
            
            
            
                  
            :
            <div id="section-login-style">
                <LoginForm
                
                loginEmail={loginEmail}
                setLoginEmail={setLoginEmail}
                loginPassword={loginPassword}
                setLoginPassword={setLoginPassword}
                loginEmailError={loginEmailError}
                loginPasswordError={loginPasswordError}
                clearEmailAndPassError={clearEmailAndPassError}
                handleSignIn={handleSignIn}
                resetPassword={() => setResetPasswordMode(true)}
                />
            </div>}

        </div>
    );
  }
  
  export default LoginPage;  