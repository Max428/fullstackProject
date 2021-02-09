import React, { useEffect, useState } from 'react';
import EditStockModal from '../EditStockButton/EditStockModal.js'

const EditStockButton = ({stockname}) => {

    const [showStockModal, setShowModal] = useState(false);

    return(
        <>
        <button onClick={() => setShowModal(true)}>Redigera aktie</button>


{showStockModal ? (
    <EditStockModal
    closeModal={() => setShowModal(!showStockModal)}
    stockname={stockname}
    />
    ) :null }
        </>
    )
}

export default EditStockButton;