import React from 'react';
// import ResetPasswordResuableForm from '../ResetPasswordResuableForm/ResetPasswordResuableForm';

const ForgetPasswordForm = ({
    email,
    setEmail,
    resetPasswordSucess,
    resetError,
    clearErrors,
    handleForgetPassword,
    forgetPassDeactive
}) => {
    return (
        <div>


            <form id="foregtpassword-form" onSubmit={handleForgetPassword}>
            <h3
                    style={{
                        color: '#32CD32',
                        textAlign: 'center',
                        height: '10px',
                        margin: '20px',
                    }}
                >
                    {resetPasswordSucess}
                </h3>

                
                <div id="field-style">
                    <input
                        className="forget-input"
                        name="email"
                        placeholder="E-postadress"
                        required
                        autoComplete="off"
                        autoFocus
                        onFocus={clearErrors}
                        value={resetError ? resetError : email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            paddingLeft: '20px',
                            color: resetError ? 'red' : 'black',
                            fontWeight: resetError ? 'bold' : 'normal',
                        }}
                    />
                </div>

                <div id="form-bottom-forgetPass">
                    <button className="form-button-style" onClick={handleForgetPassword}>
                        Återställ lösenord
                    </button>
                </div>


            </form>




            

        </div>
    );
};

export default ForgetPasswordForm;
