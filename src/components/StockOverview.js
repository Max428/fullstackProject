import React, {useEffect,useState,useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext.js';
import Portfolio from '../components/Portfolio.js';
import {readAllStocks} from '../firebase/firebase.utils.js';

const PortfolioOverview = () =>{
    const [allStocks, setStocks] = useState([]);

    const authContext = useContext(AuthContext);

    useEffect(() => {


    }, []);


    return(

        <div className="Portfolio-overview">
            <h1 id="title">Aktier</h1>
            <Portfolio/>
        </div>
    )

}
export default PortfolioOverview;