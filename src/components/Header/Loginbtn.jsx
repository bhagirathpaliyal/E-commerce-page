import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, useFirebase } from "../context/firebase"; // Import firebaseAuth directly
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Loginbtn = () => {
 

  const { user } = useFirebase();
  return (
    <div>
      {user ? (
      <Link to='Profile'>
        
        <div className="bg-[#F1F1F1] pl-[10px] pr-[10px] rounded-[50%] text-black" >{user?.email[0]}</div>
        </Link>  
      
      ) : (
        <Link to="Login">
          <div>Login</div> 
        </Link>
      )}
    </div>
  );
};

export default Loginbtn;











