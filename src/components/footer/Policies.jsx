import React from 'react';
import './footer.css';

function Policies(){
    return(
        <div className="policies" id="policies">
            <div className="policy">
                <a href="#">Informativa privacy cookie</a>
            </div>
            <div className="barra-verticale"></div>
            <div className="policy">
                <a href="#">Gestione cookie</a>
            </div>
            <div className="barra-verticale"></div>
            <div className="policy">
                <a href="#">Termini e condizioni di utilizzo</a>
            </div>
            <div className="barra-verticale"></div>
            <div className="policy">
                <a href="#">Informativa privacy marketing</a>
            </div>
        </div>
    );
}

export default Policies;