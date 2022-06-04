import { Formik, Form, Field} from 'formik'
import React, {useState} from 'react'
import './FormularioComp.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import logoEB from '../../assets/form/logoEB2.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';

const FormularioComp = () => {
  
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const form = useRef();
  const [result, setResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hf8x11q', 'template_ystdcaf', form.current, 'mG9n-7Yu16s-_sQiK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
      setResult(true);
      setTimeout(()=>setResult(false),5000)

  };
  
  return (
    <>
    {/* <Formik
      initialValues={{

        nombre: '',
        correo: ''
      }}

      validate= {(valores) => {
        let errores= {};

        if(!valores.nombre){
          errores.nombre= 'Por favor ingresa un nombre'
        }

        if(!valores.correo){
          errores.correo= 'Por favor ingresa un correo electrónico'
        } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
          errores.correo= 'Por favor ingrese un correo válido'
        }
        return errores;
      }}
      onSubmit={(valores, {resetForm})=> {
        resetForm();
        console.log('enviado')
        setFormularioEnviado(true);
        setTimeout(()=>setFormularioEnviado(false),5000)

      }}
    >
      {({values, handleSubmit, errors, touched, handleChange, handleBlur})=> (
      <Form action="" className="formulario" >

        <h2>
          CONTACTO
        </h2>
        <h3> DÉJANOS UN MENSAJE</h3>
        <div>
          <label htmlFor='nombre'></label>
          <Field
           type="text"
           id='nombre'
           name='name'
           placeholder='Nombre'

           onChange={handleChange}
           onBlur={handleBlur}/>
           {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
        </div>
        <div>
          <label htmlFor="correo"></label>
          <Field
           type='email'
            id='correo'
            name='email'
            placeholder='Correo Electrónico'

            onChange={handleChange}
            onBlur={handleBlur}
            />
          {touched.correo && errors.correo && <div className='error'>{errors.correo}</div>}

        </div>
        <div>
          <Field name='message' as='textarea' placeholder='Mensaje'/>
        </div>
        <button type='submit'>Enviar</button>
      {formularioEnviado && <p className='exito'> Mensaje Enviado</p>}
      </Form>
        )}
      </Formik> */}

      <form ref={form} className="formulario" onSubmit={sendEmail}>
       <div className='infoformulario text-center'>
        <div className="infoformularioImgContainer">
         <picture className='infoformularioImg'>
           <img src={logoEB} alt="" />
         </picture>
        </div>
         <div className='text'>
           <p>
              #SomosCultura</p>
         </div>
         <hr  style={{
              color: '#fff',
              backgroundColor: '#fff',
              height: '1px',
              borderColor : '#fff',
              width: '75%',
              margin: '10px auto',
            }}/>
         <div className='containerInfo'>
          <div className="containerInfo-icon">
            < FaPhoneAlt />
            <p> +51 950 954 158</p>
          </div>
          <div className="containerInfo-icon">
             < FiMail />
             <p>contacto.caenblanco@gmail.com</p>
          </div>
          <div className="containerInfo-icon">
             < FiMapPin />
             <p> Huancayo, Perú</p>
          </div>
         </div>
         <hr  style={{
              color: '#fff',
              backgroundColor: '#fff',
              height: '1px',
              borderColor : '#fff',
              width: '75%',
              margin: '10px auto',
            }}/>
         <div className='containerIcons'>
          <a href='https://wa.me/51965193011?text=Hola' className="containerIcons-icon" target="_blank" >
            <FaWhatsapp />
          </a>
          <a href='https://m.me/enblanco2013' className="containerIcons-icon" target="_blank">
            <FaFacebookMessenger />
          </a> 
          <div className="containerIcons-icon"> 
            <FiMail />
          </div> 
         </div>
       </div>     
       <div className='containerFormulario'>
          <h2>
          CONTACTO
        </h2>
        <h3> DÉJANOS UN MENSAJE</h3>

        <div className="containerIcons-Mobile">
        <hr  style={{
              color: '#fff',
              backgroundColor: '#fff',
              height: '1px',
              borderColor : '#fff',
              width: '50%',
              margin: '0px auto',
            }}/>
          <div className='containerIcons'>
            <a href='https://wa.me/51965193011?text=Hola' className="containerIcons-icon" target="_blank" >
              <FaWhatsapp />
            </a>
            <a href='https://m.me/enblanco2013' className="containerIcons-icon" target="_blank">
              <FaFacebookMessenger />
            </a> 
            <div className="containerIcons-icon"> 
              <FiMail />
            </div> 
          </div>
        </div>
        <div>
          <label htmlFor='nombre'></label>
          <input
           type="text"
           id='nombre'
           name='name'
           placeholder='Nombre'/>
        </div>
        <div>
          <label htmlFor="correo"></label>
          <input
           type='email'
            id='correo'
            name='email'
            placeholder='Correo Electrónico'
            />
        </div>
        <div>
        <textarea name='message' rows='7' placeholder='Mensaje'></textarea>
        </div>
        <button type='submit'>Enviar</button>
        <div > {result ? <p className='exito'> Mensaje Enviado con éxito</p> : null }</div>
      
      </div>
      </form>

    </>
  )
}

export default FormularioComp