import React from 'react';
import { Products_Accueil } from "@/data/Products_Accueil";
import ProductItem from "./ProductItem";

export const Products = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 ">
      {Products_Accueil.map((item) => (
        <ProductItem key={item.id} product={item} addToCart={addToCart} />
      ))}
    </div>
  );
};
