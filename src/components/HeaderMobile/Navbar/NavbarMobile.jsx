import React from 'react';
import './Navbar.css';
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
} from './NavbarMobElements.js';
import {FaBars} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import logoEB from '../../../assets/logo.png';
const NavbarMobile = ( {toggle} ) => {
  return (
    <>           
        <Nav>
          <NavbarContainer>
            {/* <NavLogo to='/'>
              <img src={logoEB} alt="" className='h-6'/>
            </NavLogo> */}
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            {/* <NavMenu>
              <NavItem>
                <NavLinks to='About'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='About'>Discover</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='About'>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='About'>Sign Up</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin"> 
                <FaFacebookF />           
              </NavBtnLink>
              <NavBtnLink to="/signin"> 
                <FaInstagram />           
              </NavBtnLink>
              <NavBtnLink to="/signin"> 
                <FaYoutube />           
              </NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default NavbarMobile 