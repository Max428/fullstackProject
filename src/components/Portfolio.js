import React, {useEffect, useState} from 'react';
import StockCard from '../components/StockCard/StockCard.js';

const PortfolioPage = () =>{
    const   [stocks, setStocks] = useState([]);

    useEffect(() =>{
        GetAllStocks();

    }, []);


    //Method to get all stocks
    const GetAllStocks = () =>{

        const templist = [];
        const firststock = {name:"Codic", changePricetoday:"10%", latestPrice:"20", boughtAt:"10", totalReturn:"100%"}
        const secondstock = {name:"aktie2", changePricetoday:"10%", latestPrice:"10", boughtAt:"10", totalReturn:"50%"}

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


        <table className="portfolio" style={{
            width: "50%"
        }}>
            {stocks.map((stock) => (
                
            <StockCard 
            name={stock.name} 
            changePricetoday={stock.changePricetoday}
            latestPrice={stock.latestPrice}
            boughtAt={stock.boughtAt}
            totalReturn={stock.totalReturn}
            />
            ))}

        </table>

        
    )

}


export default PortfolioPage;