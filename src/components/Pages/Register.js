import React, {useState} from 'react';
import RegistrationForm from '../LoginAndRegistrationForm/RegistrationForm.js';
import { auth, createUserDocument } from '../../firebase/firebase.utils.js';
import {useHistory} from 'react-router-dom';
const RegisterPage = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');


    const [registerEmailError, setRegisterEmailError] = useState('');
    const [registerPasswordError, setRegisterPasswordError] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [regButton, setDisableRegButton] = useState(false);

    let history = useHistory();

    //Clears all Errors
    const ClearEmailAndPassError = () => {
        setRegisterEmailError('');
        setRegisterPasswordError('');
        setFirstNameError('');
        setLastNameError('');
    };

    const handleSignUp = (e) => {
        //Disables the register button to be clicked again
        setDisableRegButton(true);
        //#endregion
        console.log(registerEmail);
        console.log(registerPassword);
        e.preventDefault();
        const trimFirstname = firstName.trim();
        if (registerPassword !== confirmedPassword) {
            setDisableRegButton(false);
            return setRegisterPasswordError('Lösenordet matchar inte!');
            
        }
        if (firstName === '' || trimFirstname === '') {
            setDisableRegButton(false);
            return setFirstNameError('Förnamn krävs!');
        }
        if (lastName === '') {
            setDisableRegButton(false);
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
                alert("Användare registrerad!");
                history.push('/');
            })
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        setRegisterEmailError('Ogiltig E-postadress!');
                        setDisableRegButton(false);
                        break;
                    case 'auth/email-already-in-use':
                        setRegisterEmailError(
                            'Användare är redan registrerad!'
                        );
                        setDisableRegButton(false);
                        break;
                    case 'auth/weak-password':
                        setRegisterPasswordError(
                            'Lösenordet måste innehålla minst 6 tecken!'
                        );
                        setDisableRegButton(false);
                        break;
                    default:
                        alert('Något gick fel!');
                        setDisableRegButton(false);
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
            regButton={regButton}
            
            
            
            />


        </div>
    );
  }
  
  export default  RegisterPage;  