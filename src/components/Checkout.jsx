import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cart, onCheckout }) => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    onCheckout();
    navigate('/');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Your Order</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <button onClick={handleCheckoutClick}>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
