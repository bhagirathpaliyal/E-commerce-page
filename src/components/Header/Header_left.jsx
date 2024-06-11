import { useState } from "react";
import { Link } from "react-router-dom/dist";

function Header_left() {
  const [isOpen, setIsOpen] = useState(false);

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
          className="flex flex-col gap-[30px] text-[24px] p-[30px] "
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="Men">
            <li>Men</li>
          </Link>
          <Link to="Women">
            <li>Women</li>
          </Link>
          <Link to="Jewelery">
            <li>jewelery</li>
          </Link>
          <Link to="Electronics">
            <li>electronics</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header_left;
