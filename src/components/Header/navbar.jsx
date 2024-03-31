import { Link } from "react-router-dom";

function Navbar(){

    return(
        <nav>

      <ul className=" flex gap-[20px] max-sm:hidden">
      <Link to='/'><li>Home</li></Link>   
      <Link to='Men'><li>Men</li></Link>  
      <Link to='Women'><li>Women</li></Link>  
      <Link to='Jewelery'><li>jewelery</li></Link>  
      <Link to='Electronics'><li>electronics</li></Link> 
       </ul>
        
         </nav>
    )
}

export default Navbar;