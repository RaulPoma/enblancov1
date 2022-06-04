import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute

} from'./SidebarMobElement'
const SidebarMobile = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />   
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='inicio' onClick={toggle} 
                 smooth={true} 
                 duration={500}
                 spy={true} 
                 exact='true'
                 offset={-80}               
                > Inicio </SidebarLink>
                <SidebarLink to='eventos' onClick={toggle}
                 smooth={true} 
                 duration={400}
                 spy={true} 
                 exact='true'
                 offset={-80}   
                > Eventos</SidebarLink>
                <SidebarLink to='sobreNosotros' onClick={toggle}
                 smooth={true} 
                 duration={400}
                 spy={true} 
                 exact='true'
                 offset={-80}   
                > Sobre Nosotros </SidebarLink>
                <SidebarLink to='nuestroEquipo' onClick={toggle}
                 smooth={true} 
                 duration={400}
                 spy={true} 
                 exact='true'
                 offset={-80}   
                > Nuestro Equipo </SidebarLink>
                <SidebarLink to='blog' onClick={toggle}
                 smooth={true} 
                 duration={400}
                 spy={true} 
                 exact='true'
                 offset={-80}   
                > Blog</SidebarLink>
                <SidebarLink to='contactanos' onClick={toggle}
                 smooth={true} 
                 duration={400}
                 spy={true} 
                 exact='true'
                 offset={-80}   
                > Contáctanos</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>redes</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SidebarMobile