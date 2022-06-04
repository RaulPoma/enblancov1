import React, {useState} from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>

        <Navbar toggle={toggle}/>
    </>
  )
}

export default Header