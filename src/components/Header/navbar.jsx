import { Link } from "react-router-dom";

function Navbar(){

    return(
        <>

       <ul className=" flex gap-[20px]">
      <Link to='/'><li>Home</li></Link>   
      <Link to='/Man'><li>Man</li></Link>  
      <Link to='Women'><li>Women</li></Link>  
      <Link to='Jewelery'><li>jewelery</li></Link>  
      <Link to='Electronics'><li>electronics</li></Link> 
       </ul>
        
         </>
    )
}

export default Navbar;