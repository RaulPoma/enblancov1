import React from 'react'
import './EventosCompv2.css'
import UltimoEventoApi from './UltimoEventosApi'
import Slide from './Slide'
import EventosApi from './EventosApi'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


const EventosCompv2 = () => {
    
  return (
    <section className='container lg:pt-8'>
        <div className="bgColor">
            <div className="eventContainer bgColorSlide">

                <div className="slide" data-aos="fade-up "
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                        {UltimoEventoApi.map((value, valueIndex) => {
                        return <Slide key={value.id} {...value} valueIndex={valueIndex} />
                        })}
                </div>
            </div> 
        </div>
        <div className="bgColorSwipper"> 
            <div className="bgColorSlideSwipper">
                        <h2 className="text-center py-12 ">OTROS EVENTOS</h2>
                        <div className="containerSwiperMobile" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper">
                                    {EventosApi.map (card=> (
                                        <SwiperSlide key={card.id}>
                                    <img src={card.image} className='imgEventosPasados'/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className="containerSwiperTablet" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={3}
                                navigation={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper">
                                {EventosApi.map (card=> (
                                        <SwiperSlide key={card.id}>
                                    <img src={card.image} className='imgEventosPasados'/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="containerSwiperDesktop" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                navigation={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                                >
                                {EventosApi.map (card=> (
                                        <SwiperSlide key={card.id}>
                                    <img src={card.image} className='imgEventosPasados'/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

            </div>
         </div>

    </section>
  )
}

export default EventosCompv2