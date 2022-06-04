import React from 'react'

const Slide = ({id, image, alt, title, desc}) => {
  return (
    <>
        <div className="bgProyecto">
            <figure className="proyectoImage">
            
              <div className="proyectoImage-Img">
                <img src={image} alt={alt} />
              </div>
              <div className='proyectoImage-hover absolute'>
                <h2> {title} </h2>
                <p> {desc} </p>
              </div>
            </figure>
        </div>

    </>
  )
}

export default Slide