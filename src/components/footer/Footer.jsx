import React from 'react';
import { Link } from 'react-scroll';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="header" smooth={true} duration={500}>Torna all'inizio</Link>
      </div>
    </footer>
  );
}

export default Footer;
