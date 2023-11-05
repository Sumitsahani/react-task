import React from 'react'
import '../Components/Nav.css'
import { FaPizzaSlice } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
const Nav = () => {
  return (
   <div className='navbar'>
      <h2>atyls</h2>
      <div className='nav-left'>
      <p>#visalikepizza<span className='pizzaslice'><FaPizzaSlice/></span></p>
      <div className='user'>< CiUser/></div>
      </div>
    </div>
  
  )
}

export default Nav