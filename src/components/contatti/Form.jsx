import React, { useState } from 'react';
import './contatti.css';

function Form(){
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let form = document.getElementById('form');
        let formData = new FormData(form);

        // Verifica che tutti i campi richiesti siano compilati
        let isValid = true;
        for (let [key, value] of formData.entries()) {
            if (!value) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            // Mostra messaggio di successo
            setStatusMessage({ type: 'success', text: 'Form inviato con successo!' });

            // Visualizza i dati nella console
            formData.forEach((value, key) => {
                console.log(key + ': ' + value);
            });

            // Svuota i campi del form
            form.reset();
        }

        // Nascondi il messaggio dopo 5 secondi
        setTimeout(() => {
            setStatusMessage('');
        }, 5000);
    };

    return(
        <form id="form" className="form" onSubmit={handleSubmit}>
            <div className="campo-form">
                <div className="label-form" id="name-label">NOME*</div>
                <input type="text" name="name" id="name" maxLength={256} aria-labelledby="name-label" required />
            </div>
            <div className="campo-form">
                <div className="label-form" id="last-name-label">COGNOME*</div>
                <input type="text" name="last-name" maxLength={256} id="last-name" aria-labelledby="last-name-label" required />
            </div>
            <div className="campo-form">
                <div className="label-form" id="email-label">EMAIL*</div>
                <input type="email" name="email" maxLength={256} id="email" aria-labelledby="email-label" required />
            </div>
            <div className="campo-form">
                <div className="label-form" id="phone-label">TELEFONO*</div>
                <input type="text" name="phone" maxLength={256} id="phone" aria-labelledby="phone-label" required />
            </div>
            <div className="campo-form">
                <div className="label-form" id="tipologies-label">TIPOLOGIE</div>
                <select id="tipologies" name="tipologies" style={{color: '#fff'}} aria-labelledby="tipologies-label">
                    <option value="">Seleziona</option>
                    <option value="Loft">Loft</option>
                    <option value="Bilocale">Bilocale</option>
                    <option value="Trilocale">Trilocale</option>         
                </select>
            </div>
            <div className="campo-form">
                <div className="label-form" id="message-label">MESSAGGIO</div>
                <textarea placeholder="" maxLength={5000} id="message" name="message" aria-labelledby="message-label"></textarea>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="accetta-informativa" name="accetta-informativa" required />
                <div htmlFor="accetta-informativa">Dichiaro di aver ricevuto idonea informativa e di prestare il suo consenso, esplicito ed inequivocabile, in relazione alle finalità del trattamento, come espresse al punto 3, lettera b, dell'informativa per il trattamento dei dati</div>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="accetta-servizi" name="accetta-servizi" required />
                <div htmlFor="accetta-servizi">Acconsento alla registrazione dei suoi dati per ricevere servizio personalizzato sulle sue reali esigenze d'acquisto</div>
            </div>
            <div className="checkbox-group">
                <input type="checkbox" id="accetta-marketing" name="accetta-marketing" required />
                <div htmlFor="accetta-marketing">Acconsento all'invio di comunicazioni di marketing, per mezzo di sistemi informatici automatizzati, ivi inclusi comunicazioni commerciali o promozionali a mezzo email o SMS, ovvero per ricerche ed analisi di mercato</div>
            </div>
            <button className="submit" id="submit" type="submit">INVIA RICHIESTA</button>
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