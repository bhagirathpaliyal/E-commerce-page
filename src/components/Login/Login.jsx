import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/firebase";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../../store/feature/authSlice";

function Login({isMerchant}) {
  const {  loginUserWithEmailAndPassword } = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userOrMerchant = isMerchant ? "Merchant" : "User"
  const navigate = useNavigate();
const dispatch=useDispatch()
  const {user, error} = useSelector((state) =>  {
    return state.auth
  });



  useEffect(() => {
    if (user) {
      navigate("/Profile");
    }
  }, [user]);

  return (
    <div className=" flex flex-col  items-center justify-center ">
      
      <div
        action=""
        className="flex flex-col gap-[10px]  "
      >
        <h2 className="flex justify-center font-medium">Login as {userOrMerchant}</h2>
        {error && <label>{error}</label>}
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
          onClick={() =>{dispatch(logInUser({ isMerchant,email,password,loginUserWithEmailAndPassword }));
        }}
          className=" border border-brown rounded-[5px] text-white bg-primary w-[100%]"
        >
          Log In
        </button>
        <div className=" flex flex-col items-center">
          <p>Don't have an Account ..?</p>
          <Link to="/SignUp" className="text-primary font-medium">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
