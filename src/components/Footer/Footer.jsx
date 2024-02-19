
import { Link } from "react-router-dom";

function Footer() {

    const today =new Date();
    return(
        <footer>
            
        <div className="flex justify-around bg-[#dfdddd] items-center  p-[50px] font-medium ">

            <div className="flex flex-col">
               <h2>Let's Connect</h2>
                 <Link to={'#'}><h2>Example@gmail.com</h2></Link>
                 <Link to={"#"}><h2>+91 1234567890</h2></Link>
                

            </div>

            <div>
              <h2><Link to={"#"}>About Us</Link></h2>  
               <h2><Link to={'#'}>Our Services</Link></h2> 
               <h2><Link to={"#"}> customers Experience</Link></h2> 

            </div>
            
            <div>
            <h2><Link to={"#"}>Private Policy</Link></h2>  
               <h2><Link to={'#'}>Help</Link></h2> 
             

            </div>

        </div>
        <div className="flex flex-col items-center justify-center h-[50px] bg-[#aaa9a9] font-medium">
            <h2>Made with heart by BP</h2>
            <h2>Copyright &copy; {today.getFullYear()} </h2>

        </div>
        </footer>
    )
}

export default Footer;