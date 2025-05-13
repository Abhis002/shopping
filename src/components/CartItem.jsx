import React from 'react';  
import { useDispatch } from 'react-redux';  //to dispatch actions to the Redux store
import { removeFromCart, increaseQty, decreaseQty } from '../redux/cartSlice';  //to modify cart state

const CartItem = ({ item }) => { 

  const dispatch = useDispatch();  //to dispatch actions to the Redux store

  return (
    <div className="cart-item"> 
      
      {/*image */}
      <img src={item.thumbnail} alt={item.title} />
      
      <div>
        {/* Display title */}
        <h4>{item.title}</h4>
        
        {/* Display price */}
        <p>${item.price}</p>

        {/* Quantity buttons */}
        <div>
          {/* Decrease button */}
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          
          {/* Displayquantity */}
          <span>{item.quantity}</span>
          
          {/* Increase button */}
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>

        {/*remove the item from the cart */}
        <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem; 
