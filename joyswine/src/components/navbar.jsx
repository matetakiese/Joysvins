import React from "react";
import { NavLink } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { GiShoppingCart } from "react-icons/gi";
import { DialogConnexion } from "./LoginButton";

export function Navbar() {
  return (
    <div className="navbar bg-white fixed w-full z-10 border-b-4 border-gray-500">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="w-48">
          <NavLink to="/">
            <img src="src\image\LOGODDH.png" alt="" />
          </NavLink>
        </div>
        <div className="flex gap-10 hidden md:flex"> 
          <div className="space-x-4">
            <Searchbar />
          </div>
          <div className="text-black">
            <DialogConnexion />
          </div>
          <div className="">
            <NavLink
              to="/GiShoppingCart"
              className="m-0 py-0"
              activeClassName="selected"
            >
              <GiShoppingCart size={"4rem"} color="#940a0a" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white ">
        <div className="flex justify-center py-2 space-x-10 ">
          <NavLink to="/vins" activeClassName="selected" className="nav-link font-bold hover:text-red-500">VINS</NavLink>
          <NavLink to="/grands-vins" activeClassName="selected" className="nav-link font-bold hover:text-red-500">GRANDS VINS</NavLink>
          <NavLink to="/biere" activeClassName="selected" className="nav-link font-bold hover:text-red-500">BIERE</NavLink>
          <NavLink to="/champagnes" activeClassName="selected" className="nav-link font-bold hover:text-red-500">CHAMPAGNES</NavLink>
          <NavLink to="/contact" activeClassName="selected" className="nav-link font-bold hover:text-red-500">CONTACT</NavLink>
          <NavLink to="/about" activeClassName="selected" className="nav-link font-bold hover:text-red-500">A PROPOS</NavLink>
        </div>
      </div>
    </div>
  );
}
