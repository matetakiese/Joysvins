import { useState } from 'react';
import { Products_Accueil } from "@/data/Products_Accueil";
import ProductItem from "./ProductItem";

export const Products = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Products_Accueil.map((item) => (
        <div key={item.id} 
             className={`relative border border-gray-200 rounded-md transition-transform duration-300 transform hover:shadow-lg ${selectedProductId === item.id ? 'ring-2 ring-blue-500' : ''}`}
             onMouseEnter={() => setSelectedProductId(item.id)}
             onMouseLeave={() => setSelectedProductId(null)}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
};