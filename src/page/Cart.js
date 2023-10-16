import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  // const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || []);
  //   setCartItems(storedCartItems);
  // }, []);

  const cartItems = useSelector((state) => state.productDetail) || [];

  return (
    <div className="flex flex-col items-center">
      <h1 className=" font-bold text-xl">My Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className=" flex flex-col gap-5">
          {' '}
          {cartItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-5">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
