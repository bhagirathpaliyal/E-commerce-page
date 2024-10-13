import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import { addUser } from "../../store/feature/authSlice";
import { useSelector, useDispatch } from 'react-redux';


const SignUp = ({isMerchant}) => {
  const { signupUserWithEmailAndPassword } = useFirebase();


  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userOrMerchant = isMerchant ? "Merchant" : "User"

  const userState = useSelector((state) => {
    return state?.auth
  });


  const navigate = useNavigate();


  useEffect(() => {
    if (userState.user) {
      navigate("/Profile");
      console.log(userState)
    }
  }, [userState]);



  return (
    <div className="  flex flex-col justify-center items-center">


      <div className=" flex flex-col gap-[10px]">

        <div className="text-center font-medium">SignUp as {userOrMerchant}</div>
        {userState.error && <label>{userState.error}</label>}
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoComplete="off"
        />

        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          id="Email"
          name="Email"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          autoComplete="off"
        />

        <label htmlFor="Password">Password</label>
        <input
          type="Password"
          id="Password"
          name="Password"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button
          onClick={() => {
            dispatch(addUser({ isMerchant, name, email, password, signupUserWithEmailAndPassword }));
          }}
          className="bg-primary w-[100%] rounded-[5px] text-white"
        >
          SignUp
        </button>

        <div className="text-center ">
          <p>Already have Account</p>
          <Link to="/Login" className="text-primary font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
