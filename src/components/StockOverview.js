import React, {useEffect,useState,useContext} from 'react'
import Portfolio from '../components/Portfolio.js';

const PortfolioOverview = () =>{



    return(

        <div className="Portfolio-overview">
            <h1 id="title">Aktier</h1>
            <Portfolio/>
        </div>
    )

}
export default PortfolioOverview;