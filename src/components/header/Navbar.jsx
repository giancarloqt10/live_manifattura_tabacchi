import React, {useEffect, useRef} from 'react';
import { Link } from 'react-scroll';
import LogoWhite from '../../assets/images/logo_white.svg';
import './header.css';

function Navbar() {
  const navLinksRef = useRef(null);
  const navIconRef = useRef(null);

  const handleNavIconClick = () => {
    const navLinks = navLinksRef.current;
    const navIcon = navIconRef.current;
    navLinks.classList.toggle('active');
    navIcon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  };

  const handleNavLinkClick = (e) => {
    e.preventDefault();
    const targetName = e.target.getAttribute('to');
    const targetElement = document.querySelector(`[name='${targetName}']`);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    const navLinks = navLinksRef.current;
    const navIcon = navIconRef.current;

    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navIcon.textContent = '☰';
    }

    if (targetElement) {
      smoothScroll(targetElement, navbarHeight);
    } else {
      console.error(`Element with name '${targetName}' not found.`);
    }
  };

  const smoothScroll = (target, offset) => {
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const navIcon = navIconRef.current;
    navIcon.addEventListener('click', handleNavIconClick);

    return () => {
      navIcon.removeEventListener('click', handleNavIconClick);
    };
  }, []);

  return (
    <nav className="navbar" id="navbar">
      <div className="logo">
        <Link to="Header" smooth={true} duration={1000} offset={-110}>
          <img src={LogoWhite} alt="logo" className="logo-img" id="logo-img" />
        </Link>
      </div>
      <div className="nav-links" ref={navLinksRef}>
        <ul>
          <li><Link to="Progetto" smooth={true} duration={1000} offset={-110} onClick={(e) => handleNavLinkClick(e)}>Il progetto</Link></li>
          <li><Link to="Storia" smooth={true} duration={1000} offset={-110} onClick={(e) => handleNavLinkClick(e)}>La storia</Link></li>
          <li><Link to="Soluzioni-abitative" smooth={true} duration={1000} offset={-110} onClick={(e) => handleNavLinkClick(e)}>Soluzioni abitative</Link></li>
          <li className="prenota-container"><Link to="Contatti" className="prenota" smooth={true} duration={1000} offset={-110} onClick={(e) => handleNavLinkClick(e)}>PRENOTA UN APPUNTAMENTO</Link></li>
        </ul>
        <Link to="Contatti" className="contact-btn2" smooth={true} duration={1000} offset={-110} onClick={(e) => handleNavLinkClick(e)}>CONTATTACI</Link>
      </div>
      <div className="nav-icon" id="nav-icon" ref={navIconRef}>☰</div>
    </nav>
  );
}

export default Navbar;
