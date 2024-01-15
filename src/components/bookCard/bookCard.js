import React from 'react'
import "./bookCard.css"
import { addFavBook } from '../../utils/fetch';
const BookCard = ({ book, loggedIn, setFavBook }) => {
  const submitHandler = async (e, book, loggedIn, setFavBook) => {
    e.preventDefault();
    console.log("bookid: ", book.id);
    console.log("username: ", loggedIn.user.username);
    const data = await addFavBook(book.id, loggedIn.user.username);
    console.log(data);
    setFavBook(data.book);
  };

    return (
    
    <div className='bookcard'>
      <p>{book.title}</p>
      <p>{book.genre}</p>
      <p>{book.author}</p>
      <button onClick={(e) => submitHandler(e, book, loggedIn, setFavBook)}>Add to Favourites</button>
      </div>
  );
};

export default BookCard