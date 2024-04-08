import { Link } from "react-router-dom";
import { ReactTyped, Typed } from "react-typed";
function H_section1() {
  return (
    <div className="  bg-hero-image h-[100%]  bg-cover  bg-no-repeat bg-bottom   flex flex-col justify-around items-center  text-black gap-[100px]">
      <div className="flex flex-col items-center ">
        <div className="border-b-[2px] border-solid border-[#0055E9] mt-[40px] rounded-[7px] ">
          <Link to="Man">
            <h1 className="text-[50px] md:text-[100px] text-black animate-bounce ">
              Shop Now!
            </h1>
          </Link>{" "}
        </div>
      </div>
      
      <div className="text-[30px] md:text-[45px] text-center">
      {<ReactTyped
      strings={[
        "Man's Wear",
        "Women's Wear",
        "Jewelery ",
        "& Electronic",
      ]}
      typeSpeed={60}
      backSpeed={80}
      // attr="placeholder"
      loop
   />}</div>
        <h2 className="text-[35px] md:text-[50px] animate-wiggle mb-[50px]">
          Get Best Offers!
        </h2>
       
    </div>
  );
}

export default H_section1;
