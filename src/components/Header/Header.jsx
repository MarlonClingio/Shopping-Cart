import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import logo from './mercado-livre-logo.png';
import CartButton from '../CartButton/CartButton';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="logo Mercado Livre" />
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
