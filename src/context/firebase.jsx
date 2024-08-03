import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt0dh0FRm5t3T0WZMMURin0-SFJsU8dGg",
  authDomain: "e-commerce-page-538f5.firebaseapp.com",
  projectId: "e-commerce-page-538f5",
  storageBucket: "e-commerce-page-538f5.appspot.com",
  messagingSenderId: "520743338609",
  appId: "1:520743338609:web:38d37b3c03ad7aee1391d0",
  measurementId: "G-77T5PWMJL2",
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

const firebaseContext = createContext(null);

export const useFirebase = () => useContext(firebaseContext);
export const db = getFirestore(firebaseApp)

export const FirebaseProvider = ({ children }) => {

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
  //     if (user) {
  //       console.log("User is signed in:", user);
  //       setUser(user);
  //     } else {
  //       console.log("User is signed out");
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const register = await createUserWithEmailAndPassword(firebaseAuth, email, password)
      return register.user
    } catch (error) {
      if (error) {
        // Error in register
        if (error.message.includes("auth/email-already-in-use")) {

          const login = await signInWithEmailAndPassword(firebaseAuth, email, password)
          return login.user

        }
        throw error
      }

    }

  };

  const  loginUserWithEmailAndPassword =async (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
   
      
  };




  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };






  return (
    <firebaseContext.Provider value={{ signupUserWithEmailAndPassword, loginUserWithEmailAndPassword, onAuthStateChanged, scrollToSection }}>
      {children}
    </firebaseContext.Provider>
  );
};
