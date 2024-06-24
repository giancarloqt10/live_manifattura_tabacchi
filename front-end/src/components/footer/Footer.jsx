import React from 'react';
import Maps from './Maps';
import Partners from './Partners';
import Policies from './Policies';
import './footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <Maps />
      <Partners />
      <Policies />
    </footer>
  );
}

export default Footer;
