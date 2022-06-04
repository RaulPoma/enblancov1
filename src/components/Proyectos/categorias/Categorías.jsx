import React from 'react'
import TituloBlack from '../../Título/TituloBlack'
import bgSeccion from '../../../assets/bgSeccion.jpg';
import clown from '../../../assets/categorias/clown.jpg'
import editorial from '../../../assets/categorias/editorial.jpg'
import editorialMobile from '../../../assets/categorias/editorialMobile.png'
import murales from '../../../assets/categorias/murales.jpg'
import musica from '../../../assets/categorias/música.jpg'
import teatro from '../../../assets/categorias/teatro.jpg'
import './Categorías.css'

const Categorías = () => {
  return (
    <>
    {/* <div style={{ backgroundImage: `url(${bgSeccion})`}} className='pb-32'> */}
    <div style={{ backgroundColor: '#C3BCB6'}} className='pb-32'   >
    <TituloBlack titulo='En Blanco es' subtítulo='Esto es lo que hacemos'/>
    <div className="gallery-container container" >
      <div className="gallery__item" data-aos="fade-right" data-aos-duration="1000" 
        data-aos-easing="ease-in-sine">
        <img src={clown} alt="" className="gallery___img" />
        <div className="gallery___title gallery___title-Left">
          <h2>CLOWN</h2>
          <h4>Conoce Narices Negras Clown</h4>
        </div>
      </div>
      <div className="gallery__item" data-aos="zoom-in" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine">
        <img src={editorial} alt="" className="editorial gallery___img" />
        <div className="gallery___title-Center">
          <h2>EDITORIAL</h2>
          <h4>Conoce EB Editorial</h4>
        </div>
      </div>
      <div className="gallery__item" data-aos="fade-left" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine">
        <img src={murales} alt="" className="gallery___img" />
        <div className="gallery___title gallery___title-Right">
          <h2>MURALES</h2>
          <h4>Recorre los murales de identidad</h4>
        </div>
      </div>
      <div className="gallery__item" data-aos="fade-right" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine">
        <img src={teatro} alt="" className="gallery___img" />
        <div className="gallery___title gallery___title-Left">
          <h2>TEATRO</h2>
          <h4>Conoce En Blanco Teatro</h4>
        </div>
      </div>
      <div className="gallery__item" data-aos="fade-left" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine">
        <img src={musica} alt="" className="gallery___img" />
        <div className="gallery___title gallery___title-Right">
          <h2>MÚSICA</h2>
          <h4>Escucha nuestras canciones</h4>
        </div>
      </div>

      <div className="gallery__item" data-aos="fade-right" data-aos-duration="1000" 
     data-aos-easing="ease-in-sine">
        <img src={editorialMobile} alt="" className="editorialmobile gallery___img" />
        <div className="gallery___title gallery___title-Left">
          <h2>EDITORIAL</h2>
          <h4>Conoce EB Editorial</h4>
        </div>
      </div>

      
    </div>
    </div>
    
    </>
  )
}

export default Categorías