import React, {useState} from 'react'
import wave1 from '../../../assets/wave1.svg'
import Titulo from '../../Título/TituloWhite'
import VideosApi from './VideosApi'
import './Videos.css'
import simboloPlay from '../../../assets/videos/simboloPlay.png';
import ReactPlayer from 'react-player'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation} from "swiper";

const Videos = () => {
  const [SelectedUrl, setSelectedUrl] = useState(VideosApi[0].url)
  const [SelectedImg, setSelectedImg] = useState(VideosApi[0].image) 

  const [watchComplete, setwatchComplete] = useState(false )
  const handleWatchComplete = ({played}) => {
    console.log(played)
  }
  return (
 <>
       
       <div className="bgColorVideos">
        <div className='relative h-8 md:h-24 lg:h-36 xl:h-48 2xl:h-60'>
            <div className="absolute w-full">
                <img src={wave1} alt=""  className='w-full'/>
            </div>
        </div>
        <Titulo titulo='Videos' subtítulo='' />
        <div className="container">
          
          <div className="containerVideos ">
            <div className="bgVideosGeneral ">
            <div className="bgVideos">
                <div className="containerActive ">
                      {/* <img src={SelectedImg} alt="" /> */}
                      <div className='player-wrapper'>
                        <ReactPlayer
                          className='react-player'
                          playing={true}
                          onProgress={handleWatchComplete}
                          url={SelectedUrl}
                          width='100%'
                          height='100%'
                        />
                      </div>
                </div>
              </div>
              <div className="containerSwiperVideosMobile" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                <Swiper
                  
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={2}
                  navigation={true}
                  modules={[FreeMode, Navigation]}
                  className="mySwiper">
                    {VideosApi.map ((card,id)=> (
                          <SwiperSlide key={card.id}>
                            <div className='activeImgContainer relative'>
                            
                              <h1 className={`${ SelectedImg===card.image ? 'activeImg-text' : 'notActiveImg-text'}`}>En reproducción</h1>
                              <div className={`${ SelectedImg===card.image ? 'activeImg--play' : 'notActiveImg--play'}`}>
                               <img src={simboloPlay} alt="" 
                                  onClick={()=>{
                                    const url=setSelectedUrl(card.url);
                                    const image=setSelectedImg(card.image);
                                    url();
                                    image()                                   
                                    
                                  }}  />

                              </div>
                            
                              <img src={card.image} className={`${ SelectedImg===card.image ? 'activeImg' : 'notActiveImg'}`}/>                             
                              


                              
                            </div>
                            </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            <div className="containerSwiperVideos" data-aos="fade-up"
                      data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                <Swiper
                  
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={3}
                  navigation={true}
                  modules={[FreeMode, Navigation]}
                  className="mySwiper">
                    {VideosApi.map ((card,id)=> (
                          <SwiperSlide key={card.id}>
                            <div className='activeImgContainer relative'>
                            
                              <h1 className={`${ SelectedImg===card.image ? 'activeImg-text' : 'notActiveImg-text'}`}>En reproducción</h1>
                              <div className={`${ SelectedImg===card.image ? 'activeImg--play' : 'notActiveImg--play'}`}>
                               <img src={simboloPlay} alt="" 
                                  onClick={()=>{
                                    const url=setSelectedUrl(card.url);
                                    const image=setSelectedImg(card.image);
                                    url();
                                    image()                                   
                                    
                                  }}  />

                              </div>
                            
                              <img src={card.image} className={`${ SelectedImg===card.image ? 'activeImg' : 'notActiveImg'}`}/>                             
                              


                              
                            </div>
                            </SwiperSlide>
                    ))}
                  </Swiper>
              </div>
            </div>
          </div>
        </div>

        </div> 
    
    
    
    </>
  )
}

export default Videos