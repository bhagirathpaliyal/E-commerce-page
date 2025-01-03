import React, { useEffect } from "react";
import H_section0 from "./Home/H_section0";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../context/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/feature/authSlice";
import { Button } from "@mui/material";
const Profile = () => {
  let user = useSelector((state) =>  {
    return state.auth.user
  });

  const dispatch =useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/Login");
    }
  },[user]);

  return (
    <div>
      <H_section0 />
      <div className="h-[100vh]   flex flex-col items-center justify-center gap-[20px]">
        <div className="bg-secondary w-[50px] h-[50px]  rounded-[50%] text-black flex justify-center items-center">
          {user?.email[0]}
        </div>

        <h1>{user?.email}</h1>
{!user?.isMerchant &&   <Link to={"/Order"}>
          {" "}
          <Button
         
            color="inherit"
            variant="outlined"
          >
            Your Order
          </Button>
        </Link>}
      
        

        <Link to={"/Login"}>
          {" "}
          <Button
            onClick={() => {signOut(firebaseAuth),dispatch(logOut()),localStorage.removeItem("user");
            }}
            color="inherit"
            variant="outlined"
          >
            sign out
          </Button>
        </Link>

    
      </div>
    </div>
  );
};

export default Profile;
