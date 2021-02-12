import React, {useContext}from "react";
import SharePortfolioButton from './ShareLinks/ShareButton.js';
import AddStockButton  from './AddStockButton/AddStockButton.js';
import StockOverview from '../components/StockOverview.js'
import {AuthContext} from '../contexts/AuthContext.js';

const MainPage = () => {

    
    const authContext = useContext(AuthContext);

    return(
    
        
    <>

{authContext.isAuthenticated ? 
<>
    <h1>Main page</h1>
    

    <div className="button-section" style={{
        display:"flex",
        

    }}>


    </div>

    <StockOverview/>
</>

:
<>
<h1>Måste logga in</h1>
</>

}



    </>
    
    
    )
}

export default MainPage;