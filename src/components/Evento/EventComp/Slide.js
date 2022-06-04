import React from "react"
import vectorHombre from '../../../assets/events/vectorHombre.png';

const Slide = ({ id, image, design, name, offcer, post, title, desc, valueIndex, index }) => {
    

  return (
    <>
      <article className='p-2 md:flex ' key={id}>
       
          <div className='Left  '>
                 <div className='Left-contentImage'>
                  <img src={vectorHombre} alt="" />
                 </div>
                 <div className="Left-container">
                 <div className="Left-contentText">
                    <h2>{post}</h2>
                    <h1 className='contentText___título'>{title}</h1>
                    <p>{desc}</p>
                    <button className="btn_shadow mt-5"> MÁS DETALLES </button>
                </div>
                </div>
          </div>
          <div className='right '>
            <div className='img'>
              <img src={image} alt='' />
            </div>
          </div>
      </article>
    </>
  )
}

export default Slide
