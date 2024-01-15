import React from 'react'
import BookCard from "../bookCard/bookCard"
import"./BooksContainer.css";

const BooksContainer = ({ allBooks, loggedIn, setFavBook }) => {
  return (
    <div className="books-container-wrapper">
        <div className="books-container-inner">
        {allBooks.map((book, key) => (
          <BookCard book={book} loggedIn={loggedIn} setFavBook={setFavBook} />
        ))}
        </div>
    </div>
  );
};

export default  BooksContainer;
