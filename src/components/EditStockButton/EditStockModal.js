import React, {useEffect, useState, useContext} from 'react';
import {EditStock} from '../../firebase/firebase.utils.js';
import {AuthContext} from '../../contexts/AuthContext.js';

const EditStockModal = ({closeModal,stockname, getAllStocks, setStocks}) => {

    useEffect(() => {
        console.log(stockname);
    })
    const [newStockName, setStockName] = useState(stockname);
    const [boughtPrice, setBoughtPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [disableRegisterButton, setDisabled] = useState(false);

    const authContext = useContext(AuthContext);

    const handleAddStock =  (e) => {
        e.preventDefault();
        setDisabled(true)
        EditStock(authContext.user, stockname, newStockName, boughtPrice,currentPrice);
        setTimeout(() => {
            getAllStocks().then(data => {
            setStocks(data);
            });
        }, 1000);
        }

return(
<>

<button onClick={closeModal}>Stäng</button>
<div>
<form onSubmit={handleAddStock}>


<input placeholder="Aktienamn" onChange={(e) => setStockName(e.target.value)}></input>
<input placeholder="Inköpspris"onChange={(e) => setBoughtPrice(e.target.value)} type="number"></input>
<input  placeholder="Nuvarande pris"onChange={(e) => setCurrentPrice(e.target.value)} type="number"></input>
<button 
onClick={(e) => handleAddStock(e)}
disabled={disableRegisterButton}

>klar</button>
</form>
</div>
        </>
    )
}

export default EditStockModal;