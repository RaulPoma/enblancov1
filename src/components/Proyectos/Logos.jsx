import React from 'react'
import ebE from '../../assets/logoEB.png'
import ebT from '../../assets/logoEBT.png'
import nnc from '../../assets/logoNNC.png'
import ebL from '../../assets/logoLima.png'



const Logos = () => {
  return (
    <div className="bgColorLogos">
    <div className=" container py-8">
          <div className= 'grid grid-cols-2 justify-items-center items-center py-5  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'> 
           <a href='https://www.facebook.com/enblancoeditorial' target='_blank' className= '  py-5 duration-300 ease-in-out hover:scale-125'   >
               <img src={ebE}  alt="Editorial en blanco editorial"  />
           </a>
           <a href='https://www.facebook.com/search/top?q=en%20blanco%20teatro' target='_blank' >
               <img src={ebT}  alt="En blanco teatro" className= ' py-5 duration-300 ease-in-out hover:scale-125' />
           </a>
           <a href='https://www.facebook.com/clowndenaricesnegras' target='_blank'>
               <img src={nnc}  alt="Narices Negras Clown"  className= ' py-5  duration-300 ease-in-out hover:scale-125' />
           </a>
           <a href='https://www.facebook.com/EnBlancoMurales' target='_blank' >
               <img src={ebL} alt="" className= ' py-5 duration-300 ease-in-out hover:scale-125 '/>
           </a>
          </div>  
          </div>
    </div>
  )
}




export default Logos 


