import React from 'react';
import './Header.css'; 

function Header({ title, description }) {
  return (
    <header className="header">
      <div className="overlay">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}

export default Header;
