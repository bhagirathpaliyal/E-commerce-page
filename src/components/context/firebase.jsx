import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        setUser(user);
      } else {
        console.log("User is signed out");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => console.log("Successfully signed up"))
      .catch((err) => console.log("Error signing up:", err));
  };

  const loginUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => console.log("Successfully logged in"))
      .catch((err) => console.log("Error logging in:", err));
  };

  return (
    <firebaseContext.Provider value={{ user, signupUserWithEmailAndPassword, loginUserWithEmailAndPassword ,onAuthStateChanged}}>
      {children}
    </firebaseContext.Provider>
  );
};
