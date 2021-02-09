import React, {useEffect, useState, useContext} from 'react';
import {addStock} from '../../firebase/firebase.utils.js';
import {AuthContext} from '../../contexts/AuthContext.js';
const AddStockModal = ({closeModal}) => {

    const [stockName, setStockName] = useState('');
    const [boughtPrice, setBoughtPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');

    const authContext = useContext(AuthContext);

    const handleAddStock = (e) => {
        e.preventDefault();
        console.log(authContext.user);
        addStock(authContext.user, stockName,boughtPrice,currentPrice);
        alert("Aktie tillagd! (refresha sidan, det har fixas sen)");
    }
    return(
        <>

<button onClick={closeModal}>Stäng</button>
<form onSubmit={handleAddStock}>


<input placeholder="Aktienamn" onChange={(e) => setStockName(e.target.value)}></input>
<input placeholder="Inköpspris"onChange={(e) => setBoughtPrice(e.target.value)}></input>
<input placeholder="Nuvarande pris"onChange={(e) => setCurrentPrice(e.target.value)}></input>
<button onClick={(e) => handleAddStock(e)}>REGGA AKTIE</button>
</form>
        </>
    )
}

export default AddStockModal;