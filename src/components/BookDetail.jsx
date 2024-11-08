import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data';

const BookDetail = ({ addToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id === Number(id));

  return (
    <div className="book-detail">
      <h2>{book.title}</h2>
      <img src={book.cover} alt={book.title} />
      <p>Author: {book.author}</p>
      <p>Price: ₹{book.price}</p>
      <p>{book.description}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookDetail;
