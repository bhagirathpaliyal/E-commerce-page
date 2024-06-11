import { useState } from "react";
import { Link, NavLink } from "react-router-dom/dist";

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
          className="flex flex-col gap-[30px] text-[14px] p-[30px] "
        >
        <NavLink
              to={"/"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/AllProducts"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>All </li>
            </NavLink>
            <NavLink
              to={"/Men"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>Men</li>
            </NavLink>
            <NavLink
              to={"/Women"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>Women</li>
            </NavLink>
            <NavLink
              to={"/jewelery"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>jewelery</li>
            </NavLink>

            <NavLink
              to={"/Electronics"}
              style={({ isActive }) => {
                return isActive ? { color: "#000000" } : {};
              }}
            >
              <li>electronics</li>
            </NavLink>
              </ul>
      </div>
    </div>
  );
}

export default Header_left;
