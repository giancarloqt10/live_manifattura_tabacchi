import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';

function Carousel_Storia(){
    return (
        <div className="carousel-2">
            <Swiper
                className='mySwiper-2'
                slidesPerView="auto"
                spaceBetween={30}
                scrollbar= {{
                    el: ".swiper-scrollbar-2",
                    hide: false,
                }}
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
                navigation= {{
                    prevEl: '.swiper-custom-button-prev-2',
                    nextEl: '.swiper-custom-button-next-2',
                }}
                modules={[Navigation, Scrollbar]}
            >
                <SwiperSlide>
                    <img src={Image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image3} />
                </SwiperSlide>
                <div className="swiper-navigation">
                    <div className="swiper-custom-button-prev-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                    </div>
                    <div className="swiper-custom-button-next-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" fill="#ffffff"/></svg>
                    </div>
                </div>
                <div className="scrollbar-container">
                    <div className="swiper-scrollbar swiper-scrollbar-2 swiper-scrollbar-horizontal"></div>
                </div>
            </Swiper>
            <div className="contorno"></div>
        </div>
    );
}

export default Carousel_Storia;