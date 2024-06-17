import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import './header.css';

function Header() {
    const bannerRef = useRef(null);

    useEffect(() => {
    const banner = bannerRef.current;
    const logoImg = document.getElementById('logo-img');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelector('.nav-links');
    const navIcon = document.getElementById('nav-icon');

    if (banner && logoImg && navbar) {
        const bannerHeight = banner.clientHeight;
        const navbarHeight = navbar.clientHeight;
        const banNavHeight = bannerHeight + navbarHeight;

        const handleScroll = () => {
        if (window.innerWidth < 1050) {
            if (window.scrollY > banNavHeight) {
            logoImg.src = '../../assets/images/logo_black.svg';
            }
        } else {
            if (window.scrollY > banNavHeight) {
            navbar.classList.add('scrolled');
            logoImg.src = '../../assets/images/logo_black.svg';
            } else {
            navbar.classList.remove('scrolled');
            logoImg.src = '../../assets/images/logo_white.svg';
            }
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }

    const handleNavIconClick = () => {
        navLinks.classList.toggle('active');
        navIcon.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    };

    const handleNavLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navIcon.textContent = '☰';
        }

        smoothScroll(targetElement, navbarHeight);
    };

    const smoothScroll = (target, offset) => {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
        });
    };

    navIcon.addEventListener('click', handleNavIconClick);
    document.querySelectorAll('.nav-links a').forEach((anchor) => {
        anchor.addEventListener('click', handleNavLinkClick);
    });

    return () => {
        navIcon.removeEventListener('click', handleNavIconClick);
        document.querySelectorAll('.nav-links a').forEach((anchor) => {
        anchor.removeEventListener('click', handleNavLinkClick);
        });
    };
    }, []);

  return (
    <header className="header" id="header">
        <div className="top">
            <div className="banner" id="banner" ref={bannerRef}>
                Scegli tua nuova casa in un contesto unico, dove l'heritage del luogo incontra il design contemporaneo. <Link to="Contatti">CONTATTACI</Link>
            </div>
            <Navbar />
        </div>
        <div className="text-header">
            <div className="title">Zenit, abitare iconico</div>
            <div className="paragraph">
                Dopo il successo dei primi due progetti residenziali, <strong>Manifattura Tabacchi presenta Zenit.</strong><br />
                Appartamenti dal design ricercato con <strong>ampi spazi esterni</strong> esclusivi. <Link to="Progetto"><strong>Scopri il progetto.</strong></Link>
            </div>
        </div>
        <div className="scopri">
            <Link to="Contatti" className="scopri-testo">SCOPRI DI PIÙ</Link>
            <div className="linea-verticale"></div>
        </div>
    </header>
  );
}

export default Header;