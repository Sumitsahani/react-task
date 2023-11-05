import React from 'react'
import '../Components/Nav.css'
import { BsPerson } from 'react-icons/bs'



const Heading = () => {
  return (
    <div className='header'>
      <h4>99.2% visas on time</h4><br />
      <h1>Get Your Visa on Time or On Us.</h1>
      <div className='outer-searchbox'>
        <div className='search'>
          <form className='form'>
            <span><BsPerson className='icon' /></span>
            <input type='text' className='input' placeholder='Where To ?' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Heading