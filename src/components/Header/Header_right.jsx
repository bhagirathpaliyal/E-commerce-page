import { Link } from "react-router-dom";
import CartImg from "./../../assets/shopping-cart.png";
import Loginbtn from "./Loginbtn";
function Header_right() {
  return (
    <div className="md:mr-[20px]">
      <div className="flex gap-[20px]">
        
         <Loginbtn/>
        
        <div className="h-[20px] w-[20px]">
          <img src={CartImg} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Header_right;
