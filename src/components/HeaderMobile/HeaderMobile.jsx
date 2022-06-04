import React, {useState} from 'react'
import NavbarMobile from '../HeaderMobile/Navbar/NavbarMobile'
import SidebarMobile from '../HeaderMobile/Sidebar/SidebarMobile'

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
        <SidebarMobile isOpen={isOpen} toggle={toggle}/>
        <NavbarMobile toggle={toggle}/>
    </>
  )
}

export default HeaderMobile