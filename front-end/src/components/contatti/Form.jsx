import React, { useState } from 'react';
import axios from 'axios';
import './contatti.css';

function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    lastName: '',
    email: '',
    phone: '',
    tipologies: '',
    messaggio: '',
    accettaInformativa: false,
    accettaServizi: false,
    accettaMarketing: false,
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost/live_manifattura_tabacchi_full-stack/back-end/api/contact.php', formData);
      setStatusMessage({
        type: 'success',
        text: 'Dati inviati con successo!',
      });
      setFormData({
        nome: '',
        lastName: '',
        email: '',
        phone: '',
        tipologies: '',
        messaggio: '',
        accettaInformativa: false,
        accettaServizi: false,
        accettaMarketing: false,
      });
      setTimeout(() => {
        setStatusMessage(null);
      }, 4000); // Nascondi il messaggio di successo dopo 5 secondi
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: 'Errore nell\'invio dei dati!',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="form" className="form" onSubmit={handleSubmit} method='POST'>
      {/* Campi del form */}
      <div className="campo-form">
        <div className="label-form" id="name-label">NOME*</div>
        <input type="text" name="nome" id="nome" maxLength={256} aria-labelledby="name-label" required value={formData.nome} onChange={handleChange} />
      </div>
      <div className="campo-form">
        <div className="label-form" id="last-name-label">COGNOME*</div>
        <input type="text" name="lastName" maxLength={256} id="last-name" aria-labelledby="last-name-label" required value={formData.lastName} onChange={handleChange} />
      </div>
      <div className="campo-form">
        <div className="label-form" id="email-label">EMAIL*</div>
        <input type="email" name="email" maxLength={256} id="email" aria-labelledby="email-label" required value={formData.email} onChange={handleChange} />
      </div>
      <div className="campo-form">
        <div className="label-form" id="phone-label">TELEFONO*</div>
        <input type="text" name="phone" maxLength={256} id="phone" aria-labelledby="phone-label" required value={formData.phone} onChange={handleChange} />
      </div>
      <div className="campo-form">
        <div className="label-form" id="tipologies-label">TIPOLOGIE</div>
        <select id="tipologies" name="tipologies" style={{ color: '#fff' }} aria-labelledby="tipologies-label" value={formData.tipologies} onChange={handleChange}>
          <option value="">Seleziona</option>
          <option value="Loft">Loft</option>
          <option value="Bilocale">Bilocale</option>
          <option value="Trilocale">Trilocale</option>
        </select>
      </div>
      <div className="campo-form">
        <div className="label-form" id="message-label">MESSAGGIO</div>
        <textarea placeholder="" maxLength={5000} id="messaggio" name="messaggio" aria-labelledby="message-label" value={formData.messaggio} onChange={handleChange}></textarea>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="accettaInformativa" name="accettaInformativa" checked={formData.accettaInformativa} onChange={handleChange} />
        <div htmlFor="accettaInformativa">Dichiaro di aver ricevuto idonea informativa...</div>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="accettaServizi" name="accettaServizi" checked={formData.accettaServizi} onChange={handleChange} />
        <div htmlFor="accettaServizi">Acconsento alla registrazione dei suoi dati...</div>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="accettaMarketing" name="accettaMarketing" checked={formData.accettaMarketing} onChange={handleChange} />
        <div htmlFor="accettaMarketing">Acconsento all'invio di comunicazioni di marketing...</div>
      </div>
      <button className="submit" id="submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Invio...' : 'INVIA RICHIESTA'}
      </button>
      {statusMessage && (
        <div style={{
          backgroundColor: statusMessage.type === 'success' ? 'lightgreen' : 'lightcoral',
          padding: '10px',
          marginTop: '10px',
          borderRadius: '5px',
          color: '#1a1a1a'
        }}>
          {statusMessage.text}
        </div>
      )}
    </form>
  );
}

export default Form;
