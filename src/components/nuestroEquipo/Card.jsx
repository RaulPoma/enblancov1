import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare} from 'react-icons/fa';
import subImg from '../../assets/nuestroequipo/Sub.png'
import './NuestroEquipo.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Card = (props) => {

  return (
    <div className='nosotros___item  w-full pb-8' data-aos="zoom-in"  data-aos-duration="1500">
        <div className='nosotros___icons  '>
          
          <a href={props.facebook} target="_blank" >
              <FaFacebookSquare size='2rem' />
          </a>
         
          <a href={props.instagram} target="_blank">
              <FaInstagramSquare size='2rem' />
          </a>
        </div>
        <div className="nosotros___image ">
          <img src={props.image} alt="" className='w-full'/>

        </div>
        
        <div className='nosotros___name relative pt-4'>
            <h2 >{props.name}</h2>
            <div className='flex justify-center'>
                <img src={subImg} alt="" className='mx-auto absolute top-4' />
            </div>
        </div>
      


    </div>
  )
}

export default Card