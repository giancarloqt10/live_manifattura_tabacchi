import React from 'react';
import './soluzioni-abitative.css';
import Carousel_Soluzioni from './Carousel_Soluzioni';

function SoluzioniAbitative() {
  return (
    <div className="soluzioni-abitative" id="soluzioni-abitative">
      <div className="up-side">
          <div className="testo-soluzioni">
              <div className="pre-title">SOLUZIONI ABITATIVE</div>
              <div className="title">Scegli la tua casa ideale</div>
              <div className="paragrafo">
                  Dal <strong>duplex</strong> compatto e funzionale ai luminosi appartamenti su un unico livello, dai <strong>loft contemporanei</strong> con giardino loggiato agli ampi bilocali con <strong>terrazzo panoramico</strong>: scopri tutte le unità disponibili.
              </div>
          </div>
      </div>
      <div className="down-side">
          <Carousel_Soluzioni />
      </div>
      <div className="bordi">
          <div className="bordi-laterali"></div>
      </div>
    </div>
  );
}

export default SoluzioniAbitative;
