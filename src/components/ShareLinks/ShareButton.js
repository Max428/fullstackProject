import React, { useEffect, useState } from 'react';

import ShareLinkModal from './ShareLinkModal.js';

const SharePortfolioButton = ({name}) => {

    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        
    }, []);


    return(
    <>
        <button onClick={() => setShowModal(true)}>Dela portfölj</button>
        {showModal ? (

            <ShareLinkModal 
            closeModal={() => setShowModal(!showModal)}
            />
        ) : null}
    
    </>
    )}

export default SharePortfolioButton;