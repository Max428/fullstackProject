import React, {useEffect, useState, useContext} from 'react';
import {AuthContext} from'../contexts/AuthContext.js';

import {readAllStocks, firestore} from '../firebase/firebase.utils.js';

import StockCard from '../components/StockCard/StockCard.js';

const PortfolioPage = () =>{
    const [stocks, setStocks] = useState([]);

    
    const authContext = useContext(AuthContext);
    useEffect(() =>{
        GetAllStocks();

    }, []);


    //Method to get all stocks
    const GetAllStocks =  async () =>{    
            
       const userRef = firestore.doc(`users/${authContext.user.uid}`);
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

                 if (obj.name != ''){
                    templist.push(obj);
                 }

               
               
           });
           setStocks(templist);
           

        
        // doc.forEach(stock => {
        //     console.log(stock);
        // });
        // setStocks(doc.data().stocks);
       }
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
            key={stock.name}
            latestPrice={stock.latestPrice}
            boughtAt={stock.boughtAt}
            />
            ))}

        </table>

        
    )

}


export default PortfolioPage;