import React from "react";
import { Searchbar } from "./Searchbar";
import { GiShoppingCart } from "react-icons/gi";
import { DialogConnexion } from "./LoginButton";

export function Navbar() {
  return (
    <div className="navbar bg-white fixed w-full z-10 border-b-4 border-gray-500 ">
      <div className="flex justify-between items-center px-4 py-2">
        <div className="w-48">
          <img src="src\image\LOGODDH.png" alt="" />
        </div>
        <div className="flex gap-10">
          <div className="space-x-4">
            <Searchbar />
          </div>
          <div className="text-black">
            <DialogConnexion />
          </div>
          <div className="">
            <a className="m-0 py-0" href="/GiShoppingCart">
              <GiShoppingCart size={"4rem"} color="#940a0a" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-white">
        <div className="flex justify-center py-2 space-x-10">
          <a href="">VINS</a>
          <a href="">GRANDS VINS</a>
          <a href="">BIERE</a>
          <a href="">CHAMPAGNES</a>
          <a href="">CONTACT</a>
          <a href="">A PROPOS</a>
        </div>
      </div>
    </div>
  );
}
