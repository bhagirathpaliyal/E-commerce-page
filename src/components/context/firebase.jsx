import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDt0dh0FRm5t3T0WZMMURin0-SFJsU8dGg",
    authDomain: "e-commerce-page-538f5.firebaseapp.com",
    projectId: "e-commerce-page-538f5",
    storageBucket: "e-commerce-page-538f5.appspot.com",
    messagingSenderId: "520743338609",
    appId: "1:520743338609:web:38d37b3c03ad7aee1391d0",
    measurementId: "G-77T5PWMJL2"
  };


  const firebaseApp=initializeApp(firebaseConfig);
export const firebaseAuth =getAuth(firebaseApp)

const analytics = getAnalytics(firebaseApp);

const firebaseContext=createContext(null);


export const useFirebase=()=>useContext(firebaseContext)

export const FirebaseProvider=(props)=>{

const signupUserWithEmailAndPassword=(email,password)=>{
   return createUserWithEmailAndPassword(firebaseAuth,email,password)
   .then(() => console.log('successfully signup'))
        .catch((err) => console.log('err ==>', err));

}


const LoginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
        .then(() => console.log('successfully Login'))
        .catch((err) => console.log('err ==>', err));
};

    return (
        
        <firebaseContext.Provider value={{signupUserWithEmailAndPassword ,LoginUserWithEmailAndPassword}}>
            {props.children}
        </firebaseContext.Provider>
    )
}