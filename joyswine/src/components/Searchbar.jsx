import React from "react";
import { BsSearch } from "react-icons/bs";

export const Searchbar = () => {
   return(
    <form className="w-[500px] relative">
    <div className="relative">
     <input 
     type="search" 
     placeholder="qu'est ce qui vous fera plaisir?"
     className="w-full p-4 rounded-full bg-slate-300" />
     <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-red-700 rounded-full ">
     <BsSearch color= {"#ffffff"} />
     </button>
    </div>
    </form>
   )

}