import {  Link } from "react-router-dom";
import { useFirebase } from "../../context/firebase";

function Navbar(){

  const { scrollToSection } = useFirebase();
    return(
        <nav>

      <ul className=" flex gap-[20px] max-sm:hidden text-[14px]">
             
           <Link
              to={"/"}
              
            ><li><button onClick={() => scrollToSection('section1')}>Home</button></li>
              
            </Link>
            
              <li><button onClick={() => scrollToSection('section2')}>Products</button></li>
            
              <li><button onClick={() => scrollToSection('section3')}>About</button></li>
              <li><button onClick={() => scrollToSection('section4')}>Services</button></li>
              <li><button onClick={() => scrollToSection('section5')}>Footer</button></li>

            
      
    
      
     
       </ul>
        
         </nav>
    )
}

export default Navbar;