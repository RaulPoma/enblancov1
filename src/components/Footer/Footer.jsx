import React from 'react'
import marco from '../../assets/form/marcoFooter.png'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className='h-40 bg-black relative '>
            <div className='flex justify-center'>
                <img src={marco} alt="" className='absolute bottom-0 pb-4 shadow-inner' />
                <h4 className='absolute bottom-32 pb-4 '>
                 © 2022 En Blanco 
                 <br />
                 <br />
                 Desarrollado por
                 <br />
                  Raúl Poma
                </h4>
            </div>

    </div>
    </>
  )
}

export default Footer