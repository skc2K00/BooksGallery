import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ username, cartCount, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Book Gallery</Link>
      </div>
      <div className="navbar-right">
        <span>Welcome, {username}</span>
        {username !== 'Guest' ? (
          <>
            <Link to="/orders">Past Orders</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <img src="src/assets/user_img.jpg" alt="User Avatar" className="avatar" />
        <Link to="/cart">
          <FaShoppingCart />
          <span>Cart {cartCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
