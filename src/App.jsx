import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import BookDetail from './components/BookDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Orders from './components/Orders'; // Add this component
import { users, books, orders as initialOrders, cart as initialCart } from './data';
import './App.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [cartCount, setCartCount] = useState(initialCart.length);
  const [cart, setCart] = useState(initialCart);
  const [pastOrders, setPastOrders] = useState(initialOrders);
  // const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setLoggedInUser(savedUser);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleLogin = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setLoggedInUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      // navigate("/");
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
  };

  const addToCart = (book) => {
    setCart((prevCart) => {
      const newCart = [...prevCart, book];
      setCartCount(newCart.length);
      return newCart;
    });
  };

  const handleCheckout = () => {
    const newOrder = {
      user: loggedInUser.username,
      items: cart,
      orderDate: new Date().toLocaleDateString(),
    };

    // Add order to past orders and clear the cart
    setPastOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]); // Clear the cart after checkout
    setCartCount(0);
    localStorage.setItem('cart', JSON.stringify([]));
  };

  return (
    <Router>
      <Navbar username={loggedInUser ? loggedInUser.username : 'Guest'} cartCount={cartCount} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="home">
              {books.map((book) => (
                <BookCard key={book.id} book={book} addToCart={addToCart} />
              ))}
            </div>
          }
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/books/:id" element={<BookDetail addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} onCheckout={handleCheckout} />} />
        {/* Route for past orders */}
        <Route path="/orders" element={<Orders pastOrders={pastOrders} />} />
      </Routes>
    </Router>
  );
}

export default App;
