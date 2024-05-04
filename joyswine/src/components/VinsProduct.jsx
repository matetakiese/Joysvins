import React from 'react';
import { Products_Accueil } from "@/data/Products_Accueil";
import ProductItem from "./ProductItem";

export const VinsProducts = ({ addToCart }) => {
  const firstFiveProducts = Products_Accueil.slice(15, 25);

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 pt-12 pb-12 pl-5 pr-5">
      {firstFiveProducts.map((item) => (
        <ProductItem key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};
