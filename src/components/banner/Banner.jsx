import React from 'react';
import "./Banner.css";
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/gb3.png'
import { Background, Parallax } from 'react-parallax';

const Banner = () => {
  return (
    <div id='inicio'>
        <div className="keyart-mobile">
        </div>
        
        <div className="keyart h-screen"  >

          <div className='parralaxBg containerbg1'>    
            <Parallax
              style={{ position: 'absolute'}} 
              className='keyart_layer'
              strength={100} >
                <Background className="custom-bg custom-bg-1">
                <img src={bg1} alt="fill murray" />
              </Background>                                   
            </Parallax> 
          </div>  

          <div className='parralaxBg containerbg2' data-aos="zoom-out-down" data-aos-duration="1500">
            <Parallax
              style={{ position: 'absolute'}}
              className='keyart_layer'
              strength={300}>
                <Background className="custom-bg custom-bg-2">
                   <img src={bg2} alt="fill murray" />
                </Background>
            </Parallax>
          </div>  

          <div className='parralaxBg containerbg3' data-aos="zoom-out-up" data-aos-duration="2000" >
            <Parallax
              style={{position: 'absolute' }}
              className='keyart_layer'
              strength={0}>
                <Background className="custom-bg custom-bg3">
                   <img src={bg3} alt="fill murray" />
                </Background>
            </Parallax>
          </div>  

        </div>     
    </div>
  )
}

export default Banner