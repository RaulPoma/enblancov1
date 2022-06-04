import React from 'react'
import vector from '../../../assets/vector1.png';
import vectorDer from '../../../assets/vectorDer.png';
import vectorIzq from '../../../assets/vectorIzq.png';
import bgNH from '../../../assets/bgNH.jpg'
import { Background } from 'react-parallax';
import TituloBlack from '../../Título/TituloBlack';
import './SobreNosotros.css';
import wave2 from '../../../assets/wave2.svg';
import wave3 from '../../../assets/wave3.svg';
import wave4 from '../../../assets/wave 4.svg';

const SobreNosotrosComp = () => {
  return (
    <>
      <div  style={{ backgroundImage: `url(${bgNH})`}} className='bg-no-repeat bg-cover '>
        <div className='nosotros-container relative' >

            <div className=' absolute w-full'>
            <img src={wave2} alt="" className='absolute top-0 w-full' />
            <img src={wave3} alt="" className='absolute top-0 w-full'/>
            </div>
            <div className='pt-8 pb-24 md:pt-24 md:pb-28 lg:pt-32 lg:pb-40'>
               <TituloBlack titulo='En Blanco' subtítulo='Cofradía Artística' />
            
            
              <p className='nosotros___text' data-aos="fade-zoom-in"
               data-aos-easing="ease-in-back" data-aos-offset="10" data-aos-duration="800">
              Arte, cultura e identidad. Desde el 2011. Somos una institución cultural polifacética de Huancayo - Perú, conformada por jóvenes artistas que despliegan sus artes de forma colaborativa. Teatro, música, literatura, muralismo, clown, cuentacuentos, audiovisuales, editorial y más. 
              Somos gestores culturales. Promovemos el uyay a través de nuestras acciones, que pretenden despertar la conciencia cultural que reafirme nuestra identidad.
              Todo por nosotros, todo por ustedes. 
                <br />
                Somos EN BLANCO.
              </p>

              <img src={vector} alt="" className='mx-auto nosotros___vector' />


              <div className='nosotros___vectorflor '>
                <img src={vectorDer} alt=""  className='nosotros___vector-Rigth absolute bottom-0 h-1/2' />
                <img src={vectorIzq} alt="" className="nosotros___vector-Left absolute bottom-0 h-1/2" />
              </div>
            </div>
            <div className='absolute w-full'>
              <img src={wave4} alt="" className='absolute bottom-0 w-full' />
            </div>
      </div>

      

    </div>
    </>
  )
}

export default SobreNosotrosComp