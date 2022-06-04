import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Eventos from './components/Evento/Eventos.jsx';
import logoEB from './assets/logo.png' 
import SobreNosotros from './components/Sobre nosotros/SobreNosotros';
import Proyectos from './components/Proyectos/Proyectos';
import NuestroEquipo from './components/nuestroEquipo/NuestroEquipo';
import Blog from './components/Blog/Blog';
import Reconocimientos from './components/Reconocimientos/Reconocimientos.jsx';
import Formulario from './components/Formulario/Formulario';
import Footer from './components/Footer/Footer';

import { useState ,useEffect} from "react";
import BeatLoader from "react-spinners/BeatLoader";
import AOS from 'aos';
import 'aos/dist/aos.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header/Header';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';
import LogosColab from './components/LogosColab/LogosColab.jsx'

function App() {
  useEffect(()=>{
    AOS.init();
  }
  )
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    // setLoading(true)
    // setTimeout(()=>{
    //   setLoading(false)

    // },500)
   
  },[])

  return (
    
    <div className="App">
      {
        loading?<div className='loading'>
          <div className='loading__item'>
            <img src={logoEB} alt="" />
            <BeatLoader color={'#fff'} loading={loading}  size={10} /> 
          </div>
        </div>
        :<div>
            <Router >
                <HeaderMobile />
            </Router>
            <Banner />
            <Router >
                <Header />
            </Router>
            <Eventos />
            <SobreNosotros />
            <Proyectos />
            <NuestroEquipo />
            <Blog />
            <Reconocimientos />
            <LogosColab />
            <Formulario />
            <Footer />
         </div>

      }
        


   </div>
  );
}

export default App;
