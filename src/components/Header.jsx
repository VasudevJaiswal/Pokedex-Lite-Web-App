// src/components/Header.jsx
import React from 'react';
import logo from '../assets/Pokedex Lite logo.png';  // Update logo path for Pokedex Lite

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="logo" src={logo} alt="Pokedex Lite Logo" />
        <h1 className="title">Pokedex Lite - Your Lightweight Pokemon Guide</h1>
      </div>
      <nav className="header-right">
        {/* Navigation links for Pokedex Lite can go here */}
      </nav>
    </header>
  );
};

export default Header;
