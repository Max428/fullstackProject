import React, { useEffect, useState } from 'react';
import EditStockModal from '../EditStockModal/EditStockModal.js';

const EditStockButton = () => {

    const [showStockModal, setShowModal] = useState(false);



    return(
        <>
        <button onClick={() => setShowModal(true)}>Redigera aktie</button>


{showStockModal ? (
    <EditStockModal
    closeModal={() => setShowModal(!showStockModal)}
    />
    ) :null }
        </>
    )
}

export default EditStockButton;