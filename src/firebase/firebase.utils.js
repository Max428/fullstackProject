import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
import 'firebase/storage';

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

    if (!snapshot.exists) {
        const createdAt = new Date();

        try {
            await userRef.set({
                createdAt: createdAt,
                birthday: '',
                bio: '',
                firstName: firstName,
                lastName: lastName,
                id: user.uid,
                email: user.email,
                active: true
            });
        } catch (err) {
            console.log(err.message);
        }
    }

    return userRef;
};
//#endregion

export const auth = Firebase.auth();
export const functions = Firebase.functions();
export const firestore = Firebase.firestore();
export const storage = Firebase.storage();

export default Firebase;
