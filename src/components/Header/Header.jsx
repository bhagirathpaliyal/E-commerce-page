

import Navbar from "./navbar";
import Header_left from "./Header_left";
import Loginbtn from "./Loginbtn";



function Header() {


  
 
  return (
    <header className="w-[100%] bg-[#0055E9] text-white flex items-center justify-between fixed top-[0px] border-b-[2px] border-solid border-white z-10 p-[20px]">
      <Header_left/>
      <Navbar />
      <Loginbtn/>  
    </header>
  );
}

export default Header;
