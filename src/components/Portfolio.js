import React, {useEffect, useState} from 'react';
import StockCard from '../components/StockCard.js';

const PortfolioPage = () =>{
    const   [stocks, setStocks] = useState([]);

    useEffect(() =>{
        GetAllStocks();

    }, []);


    //Method to get all stocks
    const GetAllStocks = () =>{

        const templist = [];
        const firststock = {name:"aktie1", price:"20"}
        const secondstock = {name:"aktie2", price:"10"}

        templist.push(firststock);
        templist.push(secondstock);

        setStocks(templist);
    }
    // const RenderAllStocks = () => {
    //     return (stocks.map((stock) => {
    //         <div>{stock.price}</div>
    //     }))
    // }

    return (


        <div className="portfolio">
            
            {stocks.map((stock) => (
                
            <StockCard name={stock.name} price={stock.price}/>
            ))}

        </div>

        
    )

}


export default PortfolioPage;