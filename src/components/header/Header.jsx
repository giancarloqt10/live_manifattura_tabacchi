import React from 'react';
import { Link } from 'react-scroll';
import Navbar from './Navbar';
import './header.css';

function Header() {
  return (
    <header className="header" id="header">
        <div className="top">
            <div className="banner" id="banner">
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