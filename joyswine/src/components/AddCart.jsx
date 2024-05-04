import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="p-4 border rounded-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - {item.price}$</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
