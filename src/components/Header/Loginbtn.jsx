<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth, useFirebase } from "../context/firebase"; // Import firebaseAuth directly
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
=======
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


>>>>>>> Stashed changes

const Loginbtn = () => {
 

<<<<<<< Updated upstream
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
=======

  const user = useSelector((state) => {
    return state.auth.user
  });
  console.log(user)
  return (
    <div>
    
        {user ? (<div className="flex gap-5">
          <Link to='Profile'>

            <div className="bg-[#F1F1F1] pl-[10px] pr-[10px] rounded-[50%] text-black" >{user?.email[0]}</div>
          </Link>
          <div>
            {!user?.isMerchant ? <Link to={'/Cart'}>
              <img src="./src/assets/shopping-cart.png" alt="" className="w-[26px]" />

            </Link> : <Link to={'/AddProducts'}>Add Products</Link>}

          </div>

        </div>
        ) : (
          <Link to="Login">
            <div>Login</div>
          </Link>
        )}
     


>>>>>>> Stashed changes
    </div>
  );
};

export default Loginbtn;











