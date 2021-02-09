import React, { useEffect, useState } from 'react';
import DeleteStockModal from '../DeleteStockModal/DeleteStockModal.js';

const DeleteStockButton = () => {

    const [showStockModal, setShowModal] = useState(false);



    return(
        <>
        <button onClick={() => setShowModal(true)}>Ta bort aktie</button>


{showStockModal ? (
    <DeleteStockModal
    closeModal={() => setShowModal(!showStockModal)}
    />
    ) :null }
        </>
    )
}

export default DeleteStockButton;