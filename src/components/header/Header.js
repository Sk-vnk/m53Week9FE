import React from 'react'

import "./Header.css";

const Header = ({ loggedIn }) => {
  console.log("header", loggedIn)
  return (
  <div className="header-wrapper">
    <div className="header-inner-container">
      {loggedIn ? <h1 className="header-title">hello {loggedIn.user.username}</h1>
    : (
    <h1 className="header-title">Awesome header</h1>
    )}
    </div>
    </div>
  );
};

export default Header;