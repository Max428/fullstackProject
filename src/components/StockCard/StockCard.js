import React, { useEffect,useState } from 'react';
import DeleteStockButton from '../DeleteStockButton/DeleteStockButton.js'
import EditStockButton from '../EditStockButton/EditStockButton.js';

import './StockCardStyling.css';

const StockCard = ({setStocks, getAllStocks, name, boughtAt, latestPrice}) => {

    const [totalReturn, setTotalReturn] = useState(0);
    useEffect(() => {
        
    setTotalReturn(calculateTotalReturn());
    }, [])

    const calculateTotalReturn = () => {
        if(boughtAt > 0 && latestPrice > 0 ){
            return Math.round((((latestPrice/boughtAt) - 1) * 100));
        }
        else{
            return 0;
        }
    }
    return(
        
        <>
        <DeleteStockButton
        stockname = {name}
        setStocks={setStocks}
        getAllStocks={getAllStocks}
        />
        <EditStockButton
        stockname={name}
        setStocks={setStocks}
        getAllStocks={getAllStocks}
        />
    <tr className="stock-card" style={{
        display: "flex",
        justifyContent:"space-between",
        padding: "20px",
        
        border: "1px black solid",
        width: "100%"
        }}>

   <td>Namn: {name} </td> 
   <td>Senaste pris: {latestPrice}</td>
   <td>Köpt vid: {boughtAt}</td>
   <td>Totalavkastning: {totalReturn}%</td>
 
    
    </tr>
    </>
    )
}

export default StockCard;