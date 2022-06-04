import React from 'react'
import './Proyectos.css'
import Titulo from '../../Título/TituloWhite';
import ProyectosApi from './ProyectosApi';
import Slide from './Slide'
const ProyectosComp = () => {
  return (
    <div id="proyectosComp">
        <Titulo titulo='Proyectos' subtítulo='' />   
         <div className="containerSlide-proyectos container">
         <div className='proyectos-Container'>
               { ProyectosApi.map (proyecto => (
                  <Slide image={proyecto.image}
                   alt={proyecto.alt} title={proyecto.title} desc={proyecto.desc}   
                   />
               ))} 
        </div>
        </div>
    </div>
  )
}

export default ProyectosComp