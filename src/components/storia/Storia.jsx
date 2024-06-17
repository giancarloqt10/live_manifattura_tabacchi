import React from 'react';
import Carousel_Storia from './Carousel_Storia'
import './storia.css';

function Storia() {
  return (
    <div className="storia" id="storia">
      <div className="sinistra">
        <div className="testo-storia">
          <div className="pre-title" style={{textAlign: 'left'}}>STORIA</div>
          <div className="title" style={{textAlign: 'left'}}>La porta di Manifattura Tabacchi</div>
          <div className="paragrafo">
              Realizzato nel 1938, l'edificio è caratterizzato da un <strong>portale monumentale</strong>, decorato da <strong>bassorilievi originali</strong>. Un patrimonio evocato nell'identità stessa del progetto di rigenerazione, <strong>“Zenit”</strong>, tra le marche di sigarette originariamente prodotte in <strong>Manifattura</strong>: parola emblematica, che racchiude e tramanda lo spirito originario del luogo. 
          </div>
        </div>
      </div>
      <div className="destra">
          <Carousel_Storia />
      </div>
    </div>
  );
}

export default Storia;
