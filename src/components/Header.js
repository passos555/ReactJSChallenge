import React from 'react';

import logo from '../assets/facebook.png';

function Header() {
  return (
    <header className="main-header">
      <nav>
        <img src={logo} alt="Facebook Logo" />
        <span>Meu Perfil</span>
      </nav>
    </header>
  );
}

export default Header;
