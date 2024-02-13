import { Link } from "react-router-dom";

import About from './../../assets/hero.jpg'
function H_section1() {
  return (
    <div className="bg-hero-image h-[100vh]  bg-cover  bg-no-repeat bg-bottom  p-[50px] flex justify-around items-center text-black ">
      <div className="flex flex-col items-center">
      {/* <div className="w-[300px] h-[300px] border-[2px] border-solid border-black">
           
        </div> */}
        <div className="border-b-[2px] border-solid border-[#0055E9] mt-[40px] rounded-[7px] "><Link to='Man'><h1 className="text-[100px] text-black animate-bounce ">Shop Now!</h1></Link> </div>
       
       
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[40px] "> Women's Wear  </h2>
        <h2 className="text-[40px]  "> Man's Wear </h2>
        <h2 className="text-[40px] "> Kid's Wear </h2>
        <h2 className="text-[60px] animate-wiggle mt-[30px]">Get Best Offers!</h2>
      </div>
    </div>
  );
}

export default H_section1;
