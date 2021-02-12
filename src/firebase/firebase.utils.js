import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/storage';


//FIXA SÅ PROCESS.ENV.REACT_APP_API_KEY funkar
const config = {
    apiKey: process.env.REACT_APP_API_KEY,  
    authDomain: "my-stock-app-d6095.firebaseapp.com",
    projectId: "my-stock-app-d6095",
    storageBucket: "my-stock-app-d6095.appspot.com",
    messagingSenderId: "28648968255",
    appId: "1:28648968255:web:9ad70044499d3ff463a88a"

    
};

Firebase.initializeApp(config);

//#region createUserDocument
export const createUserDocument = async (
    user,
    firstName,
    lastName
) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    const currentTime = new Date();
    const stocks = [{name : '', boughtAt : 0, latestPrice : 0 }]

    if (!snapshot.exists) {

        try {
            await userRef.set({
                
                active: true,
                createdAt: currentTime,
                email: user.email,
                firstName: firstName,
                lastName: lastName,
                id: user.uid,
                stocks: stocks,
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return userRef;
};
//#endregion

////#region Adds a stock to the user
export const addStock = async (
    user,
    name,
    boughtAt,
    latestPrice
) =>{
    if(!user) return;

    const newlyAddedStock = {
        name : name,
        boughtAt : boughtAt,
        latestPrice : latestPrice}

    firestore.doc(`users/${user}`)
    .get()
    .then((doc) => {
        console.log("USER IN ADDSTOCK", user)
        const userStocks = doc.data().stocks;

        if(userStocks[0].name == ''){
            userStocks.shift();
        }
        console.log("usersstock",userStocks);
        userStocks.push(newlyAddedStock);

        return doc.ref.update({stocks : userStocks})
        
    })
    .catch((error) => {
        console.log('FEL ', error)
        return null;
    })

}
////#endregion

////#region 

export const DeleteStock = async (user, stockName) => {
    if(!user)
    return;

    firestore.doc(`users/${user}`)
    .get()
    .then((doc) => {

        console.log("DETTA ÄR STOCKNAME I DELETSTOCK", stockName)
        const userStocks = doc.data().stocks;

      const tempArray = userStocks.filter(stock => stock.name != stockName)

        return doc.ref.update({stocks : tempArray})

    })
    .catch((error) => {
        console.log('FEL', error)
        return null;
    })


}
////#endregion

////#region 

export const EditStock = async (user, stockToEdit, stockName, boughtAt,latestPrice) => {
    if(!user)
    return;
    const EditedStock = {
        name : stockName,
        boughtAt : boughtAt,
        latestPrice : latestPrice,
    }
    firestore.doc(`users/${user}`)
    .get()
    .then((doc) => {
      const userStocks = doc.data().stocks;
      const tempArray = userStocks.filter(stock => stock.name !== stockToEdit);
      console.log("MIN TEMPARRAY I EDITSTOck",tempArray);
      tempArray.push(EditedStock);
    //   console.log("MIN TEMPARRAY EFTER PUSH", tempArray);
    return doc.ref.update({stocks : tempArray});
    })
    .catch((error) => {
        console.log('FEL', error)
        return null;
    })
}
////#endregion


//////#region 

export const readAllStocks = async (
user
) => {
    firestore.doc(`users/${user.uid}`)
    .get()
    .then((doc) => {
        return doc.data().stocks;
    })
    .catch((error) => {
        console.log('FEL', error)
        return null;
    })

}

////#endregion

export const auth = Firebase.auth();
export const functions = Firebase.functions();
export const firestore = Firebase.firestore();
export const storage = Firebase.storage();

export default Firebase;
