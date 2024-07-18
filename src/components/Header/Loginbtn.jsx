import React from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/firebase";


const Loginbtn = () => {


  const { user } = useFirebase();

  return (
    <div className="flex gap-5">
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
      <div>
      <Link to={'/Cart'}>
      {/* <img src="../../assets/cart-shopping-solid.svg" alt="" className="h-[50px] w-[50px]"/> */}
      Cart
      </Link>
      </div>

    </div>
  );
};

export default Loginbtn;











