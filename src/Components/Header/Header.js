import React from 'react';
import './Header.css';
import logo from '../../logo.png';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="Header">
      <img src={logo} alt="Logo"/>
      <h1>
        SHELFIE
      </h1>
      <button onClick={() => props.history.push ('/new')}>Add to Inventory</button>
    </header>
  );
}

export default withRouter(Header);
