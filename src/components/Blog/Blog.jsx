import React from "react"
import "../Blog/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"
import TituloBlack from '../Título/TituloBlack'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";


const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container'>
        <TituloBlack titulo='Blog' subtítulo='Ultimos posts'/>

          <div className='content BlogContainer '>
            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three}  desc_four={value.desc_four}/>
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Blog
