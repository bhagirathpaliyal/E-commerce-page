import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[100vh] w-[100vw]  flex flex-col justify-center items-center">


      <form action="" className=" flex flex-col gap-[10px] border border-blue-100 hover:border-blue-400 rounded-[10px] p-[20px]">
        <div className="text-center font-medium">SignUp Form</div>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Name"
        />

        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          id="Email"
          name="Email"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Email"
        />

        <label htmlFor="Password">Password</label>
        <input
          type="Password"
          id="Password"
          name="Password"
          className="border border-brown rounded-[5px]"
          placeholder=" Enter Your Password"
        />

       

        <button type="submit" className="bg-[#0055E9] rounded-[5px] text-white">SignUp</button>

        <div className="text-center ">
            <p>Already have Account</p>
            <Link to='/Login' className="text-[#0055E9] font-medium">Login</Link>
        </div>



      </form>
    </div>
  );
};

export default SignUp;
