import React from "react";
import SharePortfolioButton from './ShareLinks/ShareButton.js';
import AddStockButton  from './AddStockButton/AddStockButton.js';

const MainPage = () => {
    return(<>
    <h1>Main page</h1>
    <AddStockButton/>
    <SharePortfolioButton/>
    </>)
}

export default MainPage;