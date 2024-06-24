import React from 'react';
import './contatti.css';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contatti() {
  return (
    <div className="contatti" id="contatti">
      <div className="testo-contatti">
          <div className="pre-title" style={{textAlign: 'left'}}>FORM</div>
          <div className="title" style={{textAlign: 'left', fontWeight: 700}}>Vuoi conoscere tutti i dettagli?</div>
          <p style={{fontSize: 20 + 'px'}}><strong>Compila il form</strong> per scoprire il progetto e le nuove residenze di <strong>Manifattura Tabacchi</strong></p>
          <p style={{fontSize: 14 + 'px'}}>Sarai ricontattato da un consulente dedicato.</p>
          <div className="info">
            <span className="icona">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>Prenota il tuo appuntamento: +39 055 06.20.103</span>
          </div>
          <div className="info">
            <span className="icona">
              <FontAwesomeIcon icon={faLocationPin} />
            </span>
            <span>Firenze | Via delle Cascine, 35</span>
          </div>
      </div>
      <Form />
    </div>
  );
}

export default Contatti;
