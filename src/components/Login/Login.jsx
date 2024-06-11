import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function Login() {
  const { user, loginUserWithEmailAndPassword } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/Profile");
    }
  }, [user]);

  return (
    <div className="h-[100vh] w-[100vw] flex  items-center justify-center ">
      <div
        action=""
        className="flex flex-col gap-[10px] p-[20px] border border-blue-100 hover:border-blue-400   rounded-[10px] "
      >
        <h2 className="flex justify-center font-medium">Login Form</h2>
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          id="Email"
          name="Email"
          className="border border-brown-300 rounded-[5px] required"
          placeholder=" Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label htmlFor="Enter-Password">Password</label>
        <input
          type="password"
          id="Enter-Password"
          name="Enter-Password"
          className="border border-brown-300 rounded-[5px] required"
          placeholder=" Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />{" "}
        <button
          onClick={() => loginUserWithEmailAndPassword(email, password)}
          className=" border border-brown rounded-[5px] text-white bg-[#0055E9] w-[100%]"
        >
          Log In
        </button>
        <div className=" flex flex-col items-center">
          <p>Don't have an Account ..?</p>
          <Link to="/SignUp" className="text-[#0055E9] font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
