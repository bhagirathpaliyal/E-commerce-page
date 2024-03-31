import Header_right from "./Header_right";

import Navbar from "./navbar";
import Header_left from "./Header_left";



function Header() {


  
 
  return (
    <header className="container bg-[#0055E9] text-white flex items-center justify-between fixed top-[0px] border-b-[2px] border-solid border-white z-10 p-[20px]">
      <Header_left/>
      <Navbar />
      <Header_right />
    </header>
  );
}

export default Header;
