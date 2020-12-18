import React, { useEffect } from 'react';


const StockCard = ({name, changePricetoday, latestPrice, boughtAt, totalReturn}) => {

    useEffect(() => {
        
    }, []);


    return(
    
    <tr className="stock-card" style={{
        display: "flex",
        justifyContent:"space-between",
        padding: "20px",
        
        border: "1px black solid",
        width: "100%"
        }}>

   <td>{name} </td> 
   <td>{changePricetoday}</td>
   <td>{latestPrice}</td>
   <td>{boughtAt}</td>
   <td>{totalReturn}</td>
    
    
    </tr>
    )
}

export default StockCard;