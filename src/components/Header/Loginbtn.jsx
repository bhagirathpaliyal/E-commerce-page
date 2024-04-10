import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../context/firebase"; // Import firebaseAuth directly
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
const Loginbtn = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        console.log("hello", user);
        setUser(user);
      } else {
        setUser("");
        console.log("you are logged out");
      }
    });

    return () => unsubscribe();
  }, [firebaseAuth]);

  return (
    <div>
      {user ? (
        <div className="bg-[#F1F1F1] pl-[10px] pr-[10px] rounded-[50%] text-black" onClick={() => signOut(firebaseAuth)}>{user.email[0]}</div>
      ) : (
        <Link to="Login">
          <div>Login</div>
        </Link>
      )}
    </div>
  );
};

export default Loginbtn;
