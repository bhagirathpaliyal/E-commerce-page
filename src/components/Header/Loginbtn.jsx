import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import image from '/src/assets/shopping-cart.png'



const Loginbtn = () => {
 


  const user = useSelector((state) => {
    return state.auth.user
  });
  console.log(user)
  return (
    <div className="text-[14px]">
    
        {user ? (<div className="flex gap-5 items-center ">
          <Link to='Profile'>

            <div className="bg-[#F1F1F1] px-[10px] py-[5px] rounded-[50%] text-black" >{user?.email[0]}</div>
          </Link>
          <div>
            {!user?.isMerchant ? <Link to={'/Cart'}>
              <img src={image} alt="" className="w-[26px]" />

            </Link> : <Link to={'/AddProducts'}><div>Add Products</div></Link>}

          </div>

        </div>
        ) : (
          <Link to="Login">
            <div>Login</div>
          </Link>
        )}
     


    </div>
  );
};

export default Loginbtn;











