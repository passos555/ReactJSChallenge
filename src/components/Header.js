import React from 'react';

import logo from '../assets/facebook.png';


function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Facebook Logo"/>
      </nav>
    </header>
  )
}

export default Header;