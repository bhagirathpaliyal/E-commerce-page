import Navbar from "./navbar";
import Loginbtn from "./Loginbtn";
import ResponsiveNav from "./ResponsiveNav";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="w-[100%] bg-[#0055E9] dark:bg-gray-800 text-white flex items-center justify-between fixed top-[0px] border-b-[2px] border-solid border-white z-10 p-[20px]">
      {location.pathname == '/' ? (
        <div>
          <ResponsiveNav />
          <Navbar />
        </div>
      ) : (
        <Link to={'/'}>
          <div>home</div>
        </Link>
      )}
      <Loginbtn />
    </header>
  );
}

export default Header;
