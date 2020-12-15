import React, { useEffect } from 'react';


const StockCard = ({name, price}) => {

    useEffect(() => {
        
    }, []);


    return(
    
    <div className="stock-card">
    
    <div>This is my stock: {name} with the price {price}</div>
    
    
    </div>
    )
}

export default StockCard;