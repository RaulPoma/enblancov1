import React from "react"
import "./Reconocimientos.css"
import Card from "./Card"
import Reconocimiento_data from "./Reconocimiento_data"
import TituloWhite from "../Título/TituloWhite"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio containerRec' id='reconocimiento'>
      <TituloWhite titulo='Reconocimientos' subtítulo=''/>
        <div className='container'>

          <div className='content grid  grid-cols-3 gap-2'>
            {Reconocimiento_data.map((value, index) => {
              return <Card key={index} image={value.image}   title={value.title} />
            })}


          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
