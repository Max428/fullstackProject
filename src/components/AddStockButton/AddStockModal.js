import React, { useState, useContext} from 'react';
import {addStock} from '../../firebase/firebase.utils.js';
import {AuthContext} from '../../contexts/AuthContext.js';
const AddStockModal = ({closeModal, getAllStocks, setStocks}) => {

    const [stockName, setStockName] = useState('');
    const [boughtPrice, setBoughtPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [disableRegisterButton, setDisabled] = useState(false);

    const authContext = useContext(AuthContext);

    const handleAddStock =  (e) => {
    e.preventDefault();
    setDisabled(!disableRegisterButton);
    addStock(authContext.user, stockName,boughtPrice,currentPrice);
        
    setTimeout(() => {
        getAllStocks().then(data => {
        setStocks(data);
        });
    }, 1000);
    setDisabled(false);
    closeModal();
    }
    return(
        <>

<button onClick={closeModal}>Stäng</button>
<form onSubmit={handleAddStock}>


<input placeholder="Aktienamn" onChange={(e) => setStockName(e.target.value)} ></input>
<input placeholder="Inköpspris"onChange={(e) => setBoughtPrice(e.target.value)}type="number"></input>
<input placeholder="Nuvarande pris"onChange={(e) => setCurrentPrice(e.target.value)}type="number"></input>
<button 
onClick={(e) => handleAddStock(e)}
disabled={disableRegisterButton}
>REGGA AKTIE</button>
</form>
        </>
    )
}

export default AddStockModal;