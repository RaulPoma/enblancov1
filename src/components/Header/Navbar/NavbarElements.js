import React from 'react';
import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(200, 200, 200, 0.8);
  transition: 0.8s all ease;

  @media screen and (max-width:960px) {
    transition: 0.8s all ease;
  };
  @media screen and (max-width:768px) {
    transition: 0.8s all ease;
    display:none;
  }
`;

export const NavbarContainer = styled.nav`
  display:flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
justify-content: center;
cursor: pointer;
display: flex;
align-items: center;
font-weight:bold;
text-decoration: none;
transition: 1.5s all ease;
opacity: ${({ scrollNav }) => (scrollNav ? '1' : '0')};
@media screen and (max-width: 1020px) {
  display: none;
}

`;


export const MobileIcon = styled.div`
  display:none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  } 
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  margin: 0 auto;
  list-style: none;
  text-align: center:
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
  text-align: center;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-align: center;
  transition: all 0.5s ease-in-out;
  &.active {
    transition: all 0.2s ease-in-out;
    border-bottom: 5px solid #fff
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 1020px) {
    display: none;
  }
`
export const NavBtnLink = styled.a`
  border-radius: 50px;
  // background: #A3423C;
  // color: #fff;
  background: none;
  white-space: nowrap;
  padding: 10px 12px;
  color: #010606;
  font-size: 18px;
  outline: none;
  boder: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #A3423C;
    // color: #010606;

  }
`