import React, {useEffect,useState,useContext} from 'react'
import {AuthContext} from'../contexts/AuthContext.js';
import Portfolio from '../components/Portfolio.js';
import SharePortfolioButton from './ShareLinks/ShareButton.js';
import AddStockButton  from './AddStockButton/AddStockButton.js';
import {firestore} from '../firebase/firebase.utils.js';


const PortfolioOverview = () =>{

    const [stocks, setStocks] = useState([]);

    const authContext = useContext(AuthContext);
    useEffect(() =>{
        getAllStocks();

    }, []);

    const getAllStocks =  async () =>{    
        
            
        const userRef = firestore.doc(`users/${authContext.user}`);
        const doc =  await userRef.get();
 
        let templist = [];
        if(!doc.exists){
            console.log("No such document");
        }
        else{
            doc.data().stocks.forEach(element => {
                let obj = {
                  name:element.name, 
                  boughtAt : element.boughtAt,
                  latestPrice : element.latestPrice
                 }
 
                  if (obj.name.length > 0){
                     templist.push(obj);
                  }
                
            });
            setStocks(templist);
            return(doc.data().stocks);
            
        }
    }

    return(

        <div className="Portfolio-overview">
            <AddStockButton
            getAllStocks={getAllStocks}
            setStocks={setStocks}
            />
            <SharePortfolioButton/>

            <h1 id="title">Aktier</h1>

            <Portfolio
            stocks={stocks}
            setStocks={setStocks}
            getAllStocks={getAllStocks}
            />
        </div>
    )

}
export default PortfolioOverview;