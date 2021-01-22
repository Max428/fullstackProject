import React, { useEffect, useState } from 'react';
import AddStockModal from '../AddStockButton/AddStockModal.js';

const AddStockButton = () => {

    const [showStockModal, setShowModal] = useState(false);



    return(
        <>
        <button onClick={() => setShowModal(true)}>Lägg till aktie</button>


{showStockModal ? (
    <AddStockModal
    closeModal={() => setShowModal(!showStockModal)}
    />
    ) :null }
        </>
    )
}

export default AddStockButton;