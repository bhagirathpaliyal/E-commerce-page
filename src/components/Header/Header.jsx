import Header_right from "./Header_right";
import Logo from "./logo";
import Navbar from "./navbar";

function Header(){

    return(
        
       <div className="w-full bg-[#0055E9] text-white flex items-center justify-between fixed top-[0px] border-b-[2px] border-solid border-white z-10">
         <Logo/>
        <Navbar/>
        <Header_right/>
      
       
        
        </div>
    )
}

export default Header;