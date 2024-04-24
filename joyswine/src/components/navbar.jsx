import React from "react";
import { Searchbar } from "./Searchbar";
import { GiShoppingCart } from "react-icons/gi";

export  function Navbar() {
    return (
         <div className="flex justify-normal items-center h-200 bg-white-600 space-x-36 space-y-7 border-b-4 border-gray-500"> 
         <div className="w-48">
            <img src="src\image\LOGODDH.png" alt="" />
         </div>
         <div className="space-x-24">
         <div className="flex  gap-x-14  space-x-32 space-y-8 " >
         <div className="space-x-32">
         <Searchbar  />
         </div>
         <div className="m-30 text-base font-semibold text-black  ">
            <a href="/se connecter">Se connecter</a> 
         </div>
         <div className="">
         <a className="m-0 py-0" href="/GiShoppingCart"><GiShoppingCart size={"4rem"} color="#940a0a"  /></a>
         </div>
         </div>
         
<div className="m-30 text-base font-semibold text-black space-x-20 pb-6">
    <a href="/VINS">VINS</a>
    <a href="/GRANDS VINS">GRANDS VINS</a>
    <a href="/BIERE">BIERE</a>
    <a href="/CHAMPAGNES">CHAMPAGNES</a>
    <a href="/CONTACT">CONTACT</a>
</div>
         </div>
           

         </div>
         
         
    );
    
    } 