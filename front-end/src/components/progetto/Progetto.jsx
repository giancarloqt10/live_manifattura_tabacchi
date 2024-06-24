import React from 'react';
import Carousel_Progetto from './Carousel_Progetto';
import './progetto.css';

function Progetto() {
  return (
    <div className='progetto' id='progetto'>
        <div className="up-progetto">
            <div className="testo-progetto">
                <div className="pre-title">IL PROGETTO </div>
                <div className="title">
                    Sofisticati appartamenti dal<br />
                    carattere industriale
                </div>
                <div className="paragrafo">
                    Le innovative scelte progettuali dello studio <strong>Quincoces Dragò & Partners</strong> valorizzano il fascino storico dell'edificio monumentale più iconico di <strong>Manifattura Tabacchi</strong>, in una dimensione estetica essenziale e senza tempo. Il risultato è un equilibrio impeccabile tra anima industriale e vocazione residenziale, in cui ogni elemento è improntato all'<strong>eleganza e al comfort</strong>.
                </div>
            </div>
        </div>
        <div className="down-progetto">
            <Carousel_Progetto />
        </div>
    </div>
  );
}

export default Progetto;
