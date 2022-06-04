import React from 'react'
import ProyectosComp from './ProyectosComp/ProyectosComp';
import Logos from './Logos';
import Categorías from './categorias/Categorías';
import Foto from './Foto/Foto'; 

const Proyectos = () => {
  return (
    <div id="proyectos">
        <ProyectosComp />
        <Logos />
        <Categorías />
        <Foto />
    </div>
  )
}

export default Proyectos