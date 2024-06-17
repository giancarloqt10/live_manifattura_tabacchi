import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Planimetria from '../../assets/images/planimetria.png';
import Icona_Trilocale from '../../assets/images/icona-trilocale.png';
import Icona_Bilocale from '../../assets/images/icona-bilocale.png';
import Icona_Loft from '../../assets/images/icona-loft.png';

function Carousel_Soluzioni(){
    return (
        <div className="planimetria-container">
            <Swiper
                className='mySwiper-3'
                breakpoints={{
                    660: {
                      spaceBetween: 45
                    },
                    1681: {
                      slidesPerView: 2,
                      spaceBetween: 45
                    },
                    1920: {
                      slidesPerView: 2.5,
                      spaceBetween: 45
                    }
                }}
                loop={true}
                navigation= {{
                    prevEl: '.swiper-custom-button-prev-3',
                    nextEl: '.swiper-custom-button-next-3',
                }}
                modules={[Navigation, Scrollbar]}
            >
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="plan-sopra">
                            <div className="plan-testo">
                                <div className="title">TRILOCALE</div>
                                <div className="descrizione">Con <strong>terrazzo</strong> vista Factory</div>
                            </div>
                            <div className="icona">
                                <img src={Icona_Trilocale} alt="" />
                            </div>
                        </div>
                        <div className="plan-image">
                            <img src={Planimetria} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="plan-sopra">
                            <div className="plan-testo">
                                <div className="title">BILOCALE</div>
                                <div className="descrizione">Con <strong>rooftoop garden</strong> panoramico</div>
                            </div>
                            <div className="icona">
                                <img src={Icona_Bilocale} />
                            </div>
                        </div>
                        <div className="plan-image">
                            <img src={Planimetria} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <div className="plan-sopra">
                            <div className="plan-testo">
                                <div className="title">LOFT</div>
                                <div className="descrizione">Con <strong>giardino</strong> loggiato</div>
                            </div>
                            <div className="icona">
                                <img src={Icona_Loft} />
                            </div>
                        </div>
                        <div className="plan-image">
                            <img src={Planimetria} />
                        </div>
                    </div>
                </SwiperSlide>
                <div className="prev-button">
                    <div className="swiper-custom-button-prev-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                    </div>
                </div>
                <div className="next-button">
                    <div className="swiper-custom-button-next-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                    </div>
                </div>
            </Swiper>
        </div>
    );
}

export default Carousel_Soluzioni;