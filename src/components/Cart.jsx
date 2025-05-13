import React from 'react';
import { useSelector } from 'react-redux';// to access Redux store state
import CartItem from './CartItem'; //display each item in the cart

const Cart = () => {
  const cartItems = useSelector(state => state.cart);// Get cart items from Redux store

  if (cartItems.length === 0) return <p>Your cart is empty.</p>; // if cart is empty

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // Calculate the total price of all items 

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
