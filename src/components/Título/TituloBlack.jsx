import React from 'react';
import './Titulo.css';
import imgLeft from '../../assets/titulo/imgLeft.svg';
import imgRight from '../../assets/titulo/imgRight.svg';

const TituloBlack = (props) => {
  return (
    <>
       <div className='container'>
        <div className='containerTitle ' data-aos="fade-up" data-aos-anchor-placement="center-center"  data-aos-duration="1000">
            <div className="imageLeft">
              <img src={imgLeft} alt="" />
            </div>
            <div className='Texto'>
              <h4 className='SubtituloB'>{props.subtítulo}</h4>
              <h1 className='tituloB'>{props.titulo}</h1>
            </div>   
            <div className="imageRight">
              <img src={imgRight} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default TituloBlack