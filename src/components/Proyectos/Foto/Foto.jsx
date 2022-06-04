import React from 'react'
import foto from '../../../assets/foto.jpg';
import { Parallax } from 'react-parallax';
import './Foto.css'
const Foto = () => {
  return (
    <div >
        <Parallax bgImage={`${foto}`} bgImageAlt="En Blanco" strength={250} className='h-28 sm:h-44 md:h-52 lg:h-80 xl:h-96' >
       
         </Parallax>

        
    </div>
  )
}

export default Foto