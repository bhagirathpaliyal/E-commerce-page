import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>

      <div>
        <ul className="flex justify-center gap-[20px] my-[20px]">
          <NavLink
            to={"/Products/AllProducts"}
            style={({ isActive }) => {
              return isActive ? { color: "#aaa" } : {};
            }}
          >
            <li>All</li>
          </NavLink>
          <NavLink
            to={"/Products/Men"}
            style={({ isActive }) => {
              return isActive ? { color: "#aaa" } : {};
            }}
          >
            <li>Men</li>
          </NavLink>
          <NavLink
            to={"/Products/women"}
            style={({ isActive }) => {
              return isActive ? { color: "#aaa" } : {};
            }}
          >
            {" "}
            <li>Women</li>
          </NavLink>
          <NavLink
            to={"/Products/Jewelery"}
            style={({ isActive }) => {
              return isActive ? { color: "#aaa" } : {};
            }}
          >
            {" "}
            <li>Jewellry</li>
          </NavLink>
          <NavLink
            to={"/Products/Electronics"}
            style={({ isActive }) => {
              return isActive ? { color: "#aaa" } : {};
            }}
          >
            {" "}
            <li>Electrics</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
