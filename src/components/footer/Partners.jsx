import React from 'react';
import './footer.css';
import Icona_Investor1 from '../../assets/images/icona_investor1.png';
import Icona_Investor2 from '../../assets/images/icona_investor2.png';
import Icona_Developer from '../../assets/images/icona_developer.png';
import Icona_Sales from '../../assets/images/icona_sales.png';

function Partners(){
    return(
        <div className="partners" id="partners">
            <div className="partners-container">
                <div className="partner">
                    <div className="partner-type">INVESTOR</div>
                    <div className="partner-image">
                        <img src={Icona_Investor1} className="logo-partner logo-1" alt="" />
                        <img src={Icona_Investor2} className="logo-partner logo-2" alt="" />
                    </div>
                </div>
                <div className="partner">
                    <div className="partner-type">DEVELOPER</div>
                    <div className="partner-image">
                        <img src={Icona_Developer} className="logo-partner logo-3" alt="" />
                    </div>
                </div>
                <div className="partner">
                    <div className="partner-type">EXCLUSIVE SALES</div>
                    <div className="partner-image">
                        <img src={Icona_Sales} className="logo-partner logo-4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partners;