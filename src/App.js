import { useState, useEffect } from "react";
import './App.css';
import { getAllBooks } from "./utils/fetch";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LogOrSign from './components/logOrSign/LogOrSign';
import BooksContainer from "./components/booksContainer/BooksContainer";
import FavContainer from "./components/favContainer/favContainer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [favBook, setFavBook] = useState(false);

  useEffect(() => {
  
      (async () => {
        const data = await getAllBooks();

        setAllBooks(data.books);
        console.log(allBooks);
      })();

  }, []);

  return (
  <div>
    <Header loggedIn={loggedIn }/>
    <LogOrSign setLoggedIn={setLoggedIn} />
    <BooksContainer allBooks={allBooks} loggedIn={loggedIn} setFavBook={setFavBook} />
    <FavContainer  loggedIn={loggedIn} favBook={favBook}/>
    <Footer loggedIn={loggedIn}/>
  </div>
  );
}

export default App;
