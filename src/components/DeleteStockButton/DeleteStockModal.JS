import React, {useEffect, useState, useContext} from 'react';
import {DeleteStock} from '../../firebase/firebase.utils.js'; //DeleteStock
import {AuthContext} from '../../contexts/AuthContext.js';
const DeleteStockModal = ({closeModal,stockName}) => {


    const authContext = useContext(AuthContext);

    const handleDeleteStock = (e) => {
        e.preventDefault();
        DeleteStock(authContext.user, stockName);
        alert("Aktie borttagen (refresha sidan, det har fixas sen)");
    }
    return(
        <>
<h1>Är du säker på att du vill ta bort?</h1>
<button onClick={(e) => handleDeleteStock(e)}>Ja, radera</button>
<button onClick={closeModal}>Avbryt</button>
        </>
    )
}

export default DeleteStockModal;