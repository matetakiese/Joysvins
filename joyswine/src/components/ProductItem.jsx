import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="p-4 border rounded-md">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold text-gray-800">${product.price}</p>
    </div>
  );
};

export default ProductItem;
