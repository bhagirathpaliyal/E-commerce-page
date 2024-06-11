import { Link, NavLink } from "react-router-dom";

function Navbar(){

    return(
        <nav>

      <ul className=" flex gap-[20px] max-sm:hidden text-[14px]">
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
              <li>All</li>
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
        
         </nav>
    )
}

export default Navbar;