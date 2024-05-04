import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { NameProducts } from "@/data/NameProducts";

export const Searchbar = () => {
   const [activeSearch, setActiveSearch] = useState([]);
   const [searchValue, setSearchValue] = useState('');

   const handleSearch = (e) => {
      const inputValue = e.target.value;
      setSearchValue(inputValue);
      if (inputValue === '') {
         setActiveSearch([]);
      } else {
         const filteredProducts = NameProducts.filter(product => product.includes(inputValue)).slice(0, 46);
         setActiveSearch(filteredProducts);
      }
   };

   const handleProductClick = (product) => {
      setSearchValue(product);
      setActiveSearch([]);
   };

   return (
      <form className="w-[500px] relative">
         <div className="relative">
            <input 
               type="search" 
               placeholder="Qu'est-ce qui vous fera plaisir ?"
               className="w-full p-4 rounded-full bg-slate-300" 
               value={searchValue}
               onChange={handleSearch}
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-red-700 rounded-full ">
               <BsSearch color="#ffffff" />
            </button>
         </div>

         {activeSearch.length > 0 && (
            <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
               {activeSearch.map((product, index) => (
                  <span 
                     key={index} 
                     onClick={() => handleProductClick(product)}
                     className="cursor-pointer"
                  >
                     {product}
                  </span>
               ))}
            </div>
         )}
      </form>
   );
};
