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

} from'./SidebarElement'
const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}  >
        <Icon onClick={toggle}>
            <CloseIcon />   
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about"> About </SidebarLink>
                <SidebarLink to="discover"> Discover </SidebarLink>
                <SidebarLink to="services"> Services </SidebarLink>
                <SidebarLink to="signup"> Sign Up </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>redes</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar