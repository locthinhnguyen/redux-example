import React from 'react';

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  return (
    <div className="flex flex-col items-center">
      <h1 className=" font-bold text-xl">My Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="border rounded-lg ">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
