import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="p-4  border rounded-md flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative z-0">
  <img src={product.image} alt={product.name} className="object-cover w-24" />
  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
  <p className="text-gray-600">{product.description}</p>
  <p className="mt-2 font-bold text-gray-800">{product.price}$</p>
  <button 
    onClick={handleAddToCart} 
    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  >
    Ajouter au panier
  </button>
</div>

  );
};

export default ProductItem;
