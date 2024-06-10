import React from 'react';
import { Link } from 'react-scroll';
import LogoWhite from '../../assets/images/logo_white.svg';
import './header.css';

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <Link to="./App.js" smooth={true} duration={500}>
          <img src={LogoWhite} alt="logo" className="logo-img" id="logo-img" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li><Link to="Progetto" smooth={true} duration={500}>Il progetto</Link></li>
          <li><Link to="Storia" smooth={true} duration={500}>La storia</Link></li>
          <li><Link to="Soluzioni-abitative" smooth={true} duration={500}>Soluzioni abitative</Link></li>
          <li className="prenota-container"><Link to="Contatti" className="prenota" smooth={true} duration={500}>PRENOTA UN APPUNTAMENTO</Link></li>
        </ul>
        <Link to="Contatti" className="contact-btn2" smooth={true} duration={500}>CONTATTACI</Link>
      </div>
      <div className="nav-icon" id="nav-icon">☰</div>
    </nav>
  );
}

export default Navbar;
