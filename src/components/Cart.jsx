import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
