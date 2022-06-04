import React from 'react';
import './Titulo.css';
import imgLeft from '../../assets/titulo/imgLeft.svg';
import imgRight from '../../assets/titulo/imgRight.svg';

const Titulo = (props) => {
  return (
    <>
       <div className='container'>
       <div className='containerTitle' >
          <div className="imageLeft">
            <img src={imgLeft} alt="" />
          </div>
          <div className='Texto'>
            <h4 className='SubtituloN'>{props.subtítulo}</h4>
            <h1 className='tituloN'>{props.titulo}</h1>
          </div>   
          <div className="imageRight">
            <img src={imgRight} alt="" />
          </div>
          </div>
        </div>
    </>
  )
}

export default Titulo