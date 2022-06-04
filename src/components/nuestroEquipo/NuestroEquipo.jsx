import React from 'react'
import TituloBlack from '../Título/TituloBlack'
import bgSeccion from '../../assets/bgSeccion.jpg';
import './NuestroEquipoApi'
import Card from './Card'
import NuestroEquipoApi from './NuestroEquipoApi';
import Galery from './galeria/Galery';
import { Swiper, SwiperSlide } from "swiper/react";
import bgGalery from '../../assets/galeria/bgGalery.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


const NuestroEquipo = () => {

    return (
        <>
        {/* <div id= 'nuestroEquipo' style={{ backgroundImage: `url(${bgSeccion})`}}> */}
        <div id= 'nuestroEquipo' style={{ backgroundColor: `#C3BCB6`}}>
          <TituloBlack titulo='Nuestro Equipo' subtítulo='Como aves que vuelan en libertad'/>
            <div className='container equipo-container'>
              <div className="equipo___container" >
               { NuestroEquipoApi.map (card => (
                  <Card key={card.id}
                   facebook={card.facebook} 
                   instagram={card.instagram}
                   image={card.image} 
                   name={card.name} />


               ))}
              

              </div>
            </div>
            <div className="containerequipoMobile container" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
              <Swiper
                
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                  {NuestroEquipoApi.map (card=> (
                        <SwiperSlide>
                          <Card key={card.id}
                   facebook={card.facebook} 
                   instagram={card.instagram}
                   image={card.image} 
                   name={card.name} /> 
                      </SwiperSlide>
                  ))}
              </Swiper>
            </div>

          <TituloBlack titulo='Galería' subtítulo='Fotos y más'/>
          <div className="containerGaleryGeneral relative pb-24">
        
            <div className='container Galería z-20' >
                <Galery />
            </div>
            {/* <div className='vectorgalery z-0'>
                <img src={bgGalery} alt="" />
            </div>  */}


          </div>
        </div>
        
        </>
      )
}

export default NuestroEquipo