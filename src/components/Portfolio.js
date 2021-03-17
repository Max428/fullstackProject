import React from 'react';

import StockCard from '../components/StockCard/StockCard.js';

const PortfolioPage = ({stocks, getAllStocks, setStocks}) =>{

    return (
        <table className="portfolio" style={{
            width: "50%"
        }}>
            {stocks.map((stock) => (
                
            <StockCard 
            name={stock.name} 
            key={stock.name}
            latestPrice={stock.latestPrice}
            boughtAt={stock.boughtAt}
            setStocks = {setStocks}
            getAllStocks={getAllStocks}
            
            />
            ))}

        </table>

        
    )

}


export default PortfolioPage;