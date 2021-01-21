import React, {useEffect,useState} from 'react';
import RegistrationForm from '../LoginAndRegistrationForm/RegistrationForm.js';
import { auth, createUserDocument } from '../../firebase/firebase.utils.js';

const RegisterPage = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');


    const [registerEmailError, setRegisterEmailError] = useState('');
    const [resetError, setResetError] = useState('');
    const [registerPasswordError, setRegisterPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    //Clears all Errors
    const ClearEmailAndPassError = () => {
        setRegisterEmailError('');
        setRegisterPasswordError('');
        setResetError('');
        setFirstNameError('');
        setLastNameError('');
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const trimFirstname = firstName.trim();
        if (registerPassword !== confirmedPassword) {
            return setRegisterPasswordError('Lösenordet matchar inte!');
        }
        if (firstName === '' || trimFirstname === '') {
            return setFirstNameError('Förnamn krävs!');
        }
        if (lastName === '') {
            return setLastNameError('Efternamn krävs!');
        }
        auth.createUserWithEmailAndPassword(
            registerEmail,
            registerPassword.trim()
        )
            .then((resp) => {
                createUserDocument(
                    resp.user,
                    firstName,
                    lastName,
                );
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        setRegisterEmailError('Ogiltig E-postadress!');
                        break;
                    case 'auth/email-already-in-use':
                        setRegisterEmailError(
                            'Användare är redan registrerad!'
                        );
                        break;
                    case 'auth/weak-password':
                        setRegisterPasswordError(
                            'Lösenordet måste innehålla minst 6 tecken!'
                        );
                        break;
                    default:
                        alert('Något gick fel!');
                }
            });
    };

    return (
        <div>
            <h1>Min registreringssida</h1>
            <RegistrationForm
            handleSignUp={handleSignUp}
            registerEmail={registerEmail}
            setRegisterEmail={setRegisterEmail}
            registerPassword={registerPassword}
            setRegisterPassword={setRegisterPassword}
            confirmedPassword={confirmedPassword}
            setConfirmedPassword={setConfirmedPassword}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastname={setLastname}
            registerEmailError={registerEmailError}
            registerPasswordError={registerPasswordError}
            firstNameError={firstNameError}
            lastNameError={lastNameError}
            clearEmailAndPassError={ClearEmailAndPassError}
            
            
            
            />


        </div>
    );
  }
  
  export default  RegisterPage;  