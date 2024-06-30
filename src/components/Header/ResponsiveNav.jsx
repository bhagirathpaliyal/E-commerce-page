import { useEffect, useState } from "react";
import { Link } from "react-router-dom/dist";
import { useFirebase } from "../context/firebase";

function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
const { scrollToSection } = useFirebase();


useEffect(() => {
  const handleScroll = () => {
    setIsOpen(false);
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [setIsOpen]);


  return (
    <div className="sm:hidden  ">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>

      <div
        className={`duration-300 fixed top-[64px] w-[50%] h-[100%] bg-[#0055E9] opacity-80 
         ${isOpen ? "left-[0px]" : "left-[-100%]"}`}
      >
        <ul
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-[30px] text-[14px] p-[30px] "
        >
       <Link
              to={"/"}
             
            ><li><button onClick={() => scrollToSection('section1')}>Home</button></li>
              
            </Link>
            
              <li><button onClick={() => scrollToSection('section2')}>Products</button></li>
            
              <li><button onClick={() => scrollToSection('section3')}>About</button></li>
              <li><button onClick={() => scrollToSection('section4')}>Services</button></li>
              <li><button onClick={() => scrollToSection('section5')}>Footer</button></li>

            
      
    
      
     
       </ul>  
      </div>
    </div>
  );
}

export default ResponsiveNav;
