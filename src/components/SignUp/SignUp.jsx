import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

const SignUp = () => {
  const { user, signupUserWithEmailAndPassword } = useFirebase();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/Profile");
    }
  }, [user]);

  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-center items-center">
      <div className=" flex flex-col gap-[10px] border border-blue-100 hover:border-blue-400 rounded-[10px] p-[20px]">
        <div className="text-center font-medium">SignUp Form</div>
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
          onClick={() => signupUserWithEmailAndPassword(email, password)}
          className="bg-[#0055E9] w-[100%] rounded-[5px] text-white"
        >
          SignUp
        </button>

        <div className="text-center ">
          <p>Already have Account</p>
          <Link to="/Login" className="text-[#0055E9] font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
