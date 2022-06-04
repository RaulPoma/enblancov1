import React from 'react'
import art from '../../assets/logosColab/artificio.png'
import icp from '../../assets/logosColab/logo icpna png.png'
import mun from '../../assets/logosColab/muniHuancayo.png'
import pach from '../../assets/logosColab/pacha.png'
import rmmp from '../../assets/logosColab/rmmp.png'
import './LogosColab.css'

const Logos = () => {
  return (
    <div className="bgColor">
    <div className=" container">
          <div className= 'grid grid-cols-2 justify-items-center items-center py-5  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5'> 
           <a href='https://www.facebook.com/artificio.audiovisual' target='_blank' className= '  py-5'   >
               <img src={art}  alt="artificio arte" className= ' py-5 h-20 duration-300 ease-in-out hover:scale-125'  />
           </a>
           <a href='https://www.facebook.com/ICPNAREGIONCENTROOFICIAL' target='_blank'>
               <img src={icp}  alt=" icpna region centro" className= ' py-5 h-20 duration-300 ease-in-out hover:scale-125' />
           </a>
           <a href='https://www.facebook.com/mpHuancayo' target='_blank' >
               <img src={mun}  alt="Municipalidad de Huancayo"  className= ' py-5 h-20 duration-300 ease-in-out hover:scale-125'/>
           </a>
           <a href='https://www.facebook.com/pachahuancayo' target='_blank' >
               <img src={pach} alt="Pacha, literatura femenina " className= ' py-5 h-20 duration-300 ease-in-out hover:scale-125'/>
           </a>
           <a href='https://www.facebook.com/RMMPaudiovisual' target='_blank' >
               <img src={rmmp} alt="RMMP, Audiovisual artistica RMMP" className= ' py-5 h-20 duration-300 ease-in-out hover:scale-125'/>
           </a>
          </div>  
          </div>
    </div>
  )
}




export default Logos 


