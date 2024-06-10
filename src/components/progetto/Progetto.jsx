import React from 'react';

function Progetto() {
  return (
    <div class="progetto" id="progetto">
            <div class="up-progetto">
                <div class="testo-progetto">
                    <div class="pre-title">IL PROGETTO </div>
                    <div class="title">
                        Sofisticati appartamenti dal<br />
                        carattere industriale
                    </div>
                    <div class="paragrafo">
                        Le innovative scelte progettuali dello studio <strong>Quincoces Dragò & Partners</strong> valorizzano il fascino storico dell'edificio monumentale più iconico di <strong>Manifattura Tabacchi</strong>, in una dimensione estetica essenziale e senza tempo. Il risultato è un equilibrio impeccabile tra anima industriale e vocazione residenziale, in cui ogni elemento è improntato all'<strong>eleganza e al comfort</strong>.
                    </div>
                    </div>
            </div>
            <div class="down-progetto">
                <div class="carousel">
                    <div class="swiper mySwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="./media/image1.png" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./media/image2.png" />
                            </div>
                            <div class="swiper-slide">
                                <img src="./media/image3.png"/>
                            </div>
                        </div>
                        <div class="swiper-navigation">
                            <div class="swiper-custom-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                            </div>
                            <div class="swiper-custom-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                            </div>
                        </div>
                        <div class="scrollbar-container">
                            <div class="swiper-scrollbar .swiper-scrollbar-horizonta"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Progetto;
