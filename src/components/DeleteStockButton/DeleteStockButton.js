import React, { useEffect, useState } from 'react';
import DeleteStockModal from './DeleteStockModal'

const DeleteStockButton = ({stockname, getAllStocks, setStocks}) => {

    const [showStockModal, setShowModal] = useState(false);

    useEffect(() => {
    })

    return(
        <>
        <button onClick={() => setShowModal(true)}>Ta bort aktie</button>


{showStockModal ? (
    <DeleteStockModal
    closeModal={() => setShowModal(!showStockModal)}
    stockname={stockname}
    getAllStocks={getAllStocks}
    setStocks={setStocks}
    />
    ) :null }
        </>
    )
}

export default DeleteStockButton;