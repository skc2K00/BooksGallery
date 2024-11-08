import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.cover} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>₹{book.price}</p>
      <Link to={`/books/${book.id}`}>View Details</Link>
      {/* <button onClick={() => addToCart(book)}>Add to Cart</button> */}
    </div>
  );
};

export default BookCard;
