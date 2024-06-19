import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import LogoWhite from '../../assets/images/logo_white.svg';
import LogoBlack from '../../assets/images/logo_black.svg';
import './header.css';

function Header() {
    const bannerRef = useRef(null);

    useEffect(() => {
        const banner = bannerRef.current;
        const logoImg = document.getElementById('logo-img');
        const navbar = document.getElementById('navbar');

        if (banner && logoImg && navbar) {
            const bannerHeight = banner.clientHeight;
            const navbarHeight = navbar.clientHeight;
            const banNavHeight = bannerHeight + navbarHeight;

            if(window.innerWidth < 1050){
                logoImg.src= LogoBlack;
            }

            const handleScroll = () => {
                if (window.innerWidth < 1050) {
                    if (window.scrollY > banNavHeight) {
                        logoImg.src = LogoBlack;
                    }
                } 
                else {
                    if (window.scrollY > banNavHeight) {
                        navbar.classList.add('scrolled');
                        logoImg.src = LogoBlack;
                    } else {
                        navbar.classList.remove('scrolled');
                        logoImg.src = LogoWhite;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        }
    }, []);


  return (
    <div className='header' id='header'>
        <div className="top">
            <div className="banner" id="banner" ref={bannerRef}>
                Scegli tua nuova casa in un contesto unico, dove l'heritage del luogo incontra il design contemporaneo. <Link to="Contatti" smooth={true} duration={1000} offset={-110}>CONTATTACI</Link>
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
            <Link to="Contatti" className="scopri-testo" smooth={true} duration={1000} offset={-110}>SCOPRI DI PIÙ</Link>
            <div className="linea-verticale"></div>
        </div>
    </div>
  );
}

export default Header;