import React, {useState, useEffect} from 'react';
import './Navbar.css';
import { animateScroll as scroll } from 'react-scroll';
import  {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements.js';
import {FaBars} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import logoEB from '../../../assets/logo.png';

const Navbar = ( {toggle} ) => {
  const [scrollNav, setScrollNav] = useState(false)

const changeNav = () => {
    if(window.scrollY >= 500) {
      setScrollNav(true);
    } else {
      setScrollNav (false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }
  
  return (
    <>           
        {/* <Nav data-aos="zoom-out-up" data-aos-offset="-100px" data-aos-duration="2000"> */}
        <Nav scrollNav={scrollNav} >
          <NavbarContainer>
            <NavLogo to='/' scrollNav={scrollNav}  onClick={toggleHome}>
              <img src={logoEB} alt="Logo En Blanco" className='h-6'/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='inicio'
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true'
                offset={-80}
                >
                  Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='eventos'
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true'
                offset={-80}
                >
                  Eventos
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='sobreNosotros'
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true'
                >
                  Sobre Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='proyectos'
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true'
                offset={-80}
                >
                  Proyectos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='nuestroEquipo'
                 smooth={true} 
                 duration={500}
                 spy={true} 
                 exact='true'               
                >
                  Nuestro Equipo
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='blog'
                  smooth={true} 
                  duration={500}
                  spy={true} 
                  exact='true'                  
                >
                  Blog
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contactanos'
                  smooth={true} 
                  duration={500}
                  spy={true} 
                  exact='true'   
                >
                  Contáctanos
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="https://www.facebook.com/enblanco2013" target="_blank"> 
                <FaFacebookF className='iconRedes'/>           
              </NavBtnLink >
              <NavBtnLink href="https://www.facebook.com/enblanco2013" target="_blank">  
                <FaInstagram className='iconRedes'/>          
              </NavBtnLink>
              <NavBtnLink href="https://www.youtube.com/channel/UCzGUIgVigUfIlhchlL_KHTA" target="_blank"> 
                <FaYoutube className='iconRedes'/>           
              </NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar