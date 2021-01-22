import React, {useContext}from "react";
import SharePortfolioButton from './ShareLinks/ShareButton.js';
import AddStockButton  from './AddStockButton/AddStockButton.js';
import StockOverview from '../components/StockOverview.js'
import AuthContext from '../contexts/AuthContext.js';

const MainPage = () => {

    
    const authContext = useContext(AuthContext);

    return(
    
    <>

    <h1>Main page</h1>
    

    <div className="button-section" style={{
        display:"flex",
        

    }}>
    <AddStockButton/>
    <SharePortfolioButton/>

    </div>

    <StockOverview/>

    </>
    
    
    )
}

export default MainPage;