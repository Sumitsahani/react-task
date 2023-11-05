import React from 'react'
import '../Components/Nav.css'
import {BsPerson}from 'react-icons/bs'

const Searchbar = () => {
  return (
    <>
    <div className='outer-searchbox'>
    <div className='search'>
       <form className='form'>
        <span><BsPerson className='icon'/></span>
            <input type='text'  placeholder='Where To ?' />
        </form>
    </div>
    </div>
    </>
  )
}

export default Searchbar