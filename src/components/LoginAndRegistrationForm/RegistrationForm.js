import React, {useEffect,useState} from 'react';

const RegistrationForm = () => {
    const [FirstName, setFirstName] = useState('');
    
    const [LastName, setLastName] = useState('');
    
    const [Email, setEmail] = useState('');
    
    const [Password, setPassword] = useState('');

    const handleSignUp = (e) => {

        e.preventDefault();
        const TrimFirstName = FirstName.trim();

        if (FirstName === '' || TrimFirstName === '') {
            return setFirstNameError('Förnamn krävs!');
        }
        if (LastName === '') {
            return setLastNameError('Efternamn krävs!');
        }

    }
    return (
        <div id="register-container">
            <form id="register-form" onSubmit={handleSignUp}>
                <input 
                name="firstname"
                placeholder="Firstname..."
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}></input>
                
                
                <input 
                name="lastname"
                placeholder="lastname..."
                autoFocus
                onChange={(e) => setLastName(e.target.value)}></input>
                
                <input 
                name="Email"
                placeholder="Email..."
                autoFocus
                onChange={(e) => setEmail(e.target.value)}></input>

<input 
                name="Password"
                placeholder="Password..."
                autoFocus
                onChange={(e) => setPassword(e.target.value)}></input>

                <button>Register</button>

            </form>
        </div>
    );
  }
  
  export default  RegistrationForm;  