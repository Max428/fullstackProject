import React, { useEffect, useState } from 'react';
import DeleteStockModal from '../DeleteStockButton/DeleteStockModal'

const DeleteStockButton = ({stockname}) => {

    const [showStockModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log("STOCKNAME I DELETESTOCKBUTTON",stockname);
    })

    return(
        <>
        <button onClick={() => setShowModal(true)}>Ta bort aktie</button>


{showStockModal ? (
    <DeleteStockModal
    closeModal={() => setShowModal(!showStockModal)}
    stockname={stockname}
    />
    ) :null }
        </>
    )
}

export default DeleteStockButton;