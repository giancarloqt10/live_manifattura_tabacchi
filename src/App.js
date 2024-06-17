import React from 'react';
import Header from './components/header/Header';
import Progetto from './components/progetto/Progetto';
import Storia from './components/storia/Storia';
import Servizi from './components/servizi/Servizi';
import SoluzioniAbitative from './components/soluzioni-abitative/Soluzioni-abitative';
import Contatti from './components/contatti/Contatti';
import Footer from './components/footer/Footer';
import { Element } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="Progetto">
        <Progetto />
      </Element>
      <Element name="Storia">
        <Storia />
      </Element>
      <Element name="Servizi">
        <Servizi />
      </Element>
      <Element name="Soluzioni-abitative">
        <SoluzioniAbitative />
      </Element>
      <Element name="Contatti">
        <Contatti />
      </Element>
      <Element name="Footer">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
