import React, { useEffect, useState } from 'react';
import EditStockModal from '../EditStockButton/EditStockModal.js'

const EditStockButton = ({stockname, getAllStocks, setStocks}) => {

    const [showStockModal, setShowModal] = useState(false);

    return(
        <>
        <button onClick={() => setShowModal(true)}>Redigera aktie</button>


{showStockModal ? (
    <EditStockModal
    closeModal={() => setShowModal(!showStockModal)}
    stockname={stockname}
    getAllStocks={getAllStocks}
    setStocks={setStocks}
    />
    ) :null }
        </>
    )
}

export default EditStockButton;