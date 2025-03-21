import { Link } from "react-router-dom";

function Footer() {
  const today = new Date();
  return (
    <footer>
      <div id="section5" className="flex justify-around text-center flex-wrap gap-[20px] bg-primary items-center  p-[50px] font-medium pt-[100px]">
        <div className="flex flex-col">
          <h2>Let's Connect</h2>
          <Link to={"#"}>
            <h2>Example@gmail.com</h2>
          </Link>
          <Link to={"#"}>
            <h2>+91 1234567890</h2>
          </Link>
        </div>

        <div>
          <h2>
            <Link to={"#"}>About Us</Link>
          </h2>
          <h2>
            <Link to={"#"}>Our Services</Link>
          </h2>
          <h2>
            <Link to={"#"}> customers Experience</Link>
          </h2>
        </div>

        <div>
          <h2>
            <Link to={"#"}>Private Policy</Link>
          </h2>
          <h2>
            <Link to={"#"}>Help</Link>
          </h2>
        </div>
      </div>
      <div className=" py-4 bg-secondary">
        <div className="w-[100%] mx-auto px-6 flex justify-around items-center flex-wrap">
         
          <div className="flex space-x-6">
            <a href="https://github.com/bhagirathpaliyal" target="_blank" rel="noopener noreferrer" className=" text-[#B0B0B0] hover:text-gray-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bhagirath-paliyal" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-gray-400">
              LinkedIn
            </a>
            <a href="https://twitter.com/b_paliyal" target="_blank" rel="noopener noreferrer" className="text-[#B0B0B0] hover:text-gray-400">
              Twitter
            </a>

           
            
          </div>
  
       
          <div className="text-sm text-[#B0B0B0]">
            &copy; {new Date().getFullYear()} Bhagirath Paliyal.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
