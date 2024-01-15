import React from 'react';
import "./favContainer.css";

const FavContainer = ({loggedIn, favBook, setFavBook}) => {
  console.log(favBook)
  return (
    <div className='favContainer-wrapper'>
        <div className='favContainer-inner'>
<div className='favContainer-detail'>
    <h3>
      <p>Hello </p>
      <p>your favourite book is:</p>
      <p>{favBook.title}</p>
      </h3>
</div>
<div className='favContainer-detail'>
      <p className='title'>Title: {favBook.title}</p>
      <p className='genre'>Genre: {favBook.genre}</p>
      <p className='author'>Author: {favBook.author}</p>
  </div>
</div>

    </div>
  );
};

export default FavContainer