import React from 'react';
import bgForm from '../../assets/form/bgForm.jpg';
import { Background, Parallax } from 'react-parallax';
import vectorForm from '../../assets/form/vectorForm.png'
import './Formulario.css'
import FormularioComp from './FormularioComp'
import { Form } from 'formik';

const Formulario = () => {
  return (
    <div id='contactanos'>
        <img src={vectorForm} alt="" className='w-full absolute z-20'/> 

        <div className="containerDesktopForm relative">
        
          <Parallax
                // bgImage={`${bgForm}`}  className='bg___parralax bg-no-repeat z-0'
                // strength={-200}>
                  className='bg___parralax'
                  strength={-200}>
                    <Background className="bgParralaxForm">
                      <img src={bgForm} alt="revistaEnBlanco" />
                    </Background>                
          </Parallax> 
          <div className='formContainer container'>
            <FormularioComp  /> 
          </div>
        </div>
        <div className="containerMobileForm  flex justify-center items-center">
          <div className="container flex justify-center items-center">
            <FormularioComp  />
          </div>
             
        </div>
    
    
    </div>
  )
}

export default Formulario