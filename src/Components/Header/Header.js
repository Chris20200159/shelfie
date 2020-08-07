import React from 'react';
import './Header.css';
import logo from '../../logo.png';

const Header = () => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo"/>
      <h1>
        SHELFIE
      </h1>

    </header>
  );
}

export default Header;
