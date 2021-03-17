import React, {useState, useContext} from 'react';
import {DeleteStock} from '../../firebase/firebase.utils.js'; //DeleteStock
import {AuthContext} from '../../contexts/AuthContext.js';
const DeleteStockModal = ({closeModal,stockname, getAllStocks, setStocks}) => {


    const authContext = useContext(AuthContext);
    const [disableRegisterButton, setDisabled] = useState(false);

    const handleDeleteStock = (e) => {
        e.preventDefault();
        setDisabled(!disableRegisterButton);
        DeleteStock(authContext.user, stockname);

        setTimeout(() => {
            getAllStocks().then(data => {
            setStocks(data);
            });
        }, 1000);
        setDisabled(!disableRegisterButton);

    }
    return(
        <>
<h1>Är du säker på att du vill ta bort?</h1>
<button 
onClick={(e) => handleDeleteStock(e)}
disabled={disableRegisterButton}
>Ja, radera</button>
<button onClick={closeModal}>Avbryt</button>
        </>
    )
}

export default DeleteStockModal;