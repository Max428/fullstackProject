import React, { useState } from 'react';
import AddStockModal from '../AddStockButton/AddStockModal.js';

const AddStockButton = ({getAllStocks, setStocks}) => {

    const [showStockModal, setShowModal] = useState(false);

    return(
        <>
        <button onClick={() => setShowModal(true)}>Lägg till aktie</button>


{showStockModal ? (
    <AddStockModal
    closeModal={() => setShowModal(!showStockModal)}
    getAllStocks={getAllStocks}
    setStocks={setStocks}
    />
    ) :null }
        </>
    )
}

export default AddStockButton;