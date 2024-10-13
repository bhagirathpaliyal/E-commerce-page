import { createContext, useContext} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:  import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
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
