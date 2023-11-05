import React from 'react'
import { MdPhotoLibrary } from "react-icons/md";
import '../Components/Nav.css'
const Filter = () => {
  return (
    <div className='filter-box'>
    <div className='filter'>
        <div className='files'><MdPhotoLibrary/></div>
        <button className='filter-text'>All</button>
        <button className='filter-text'>Instant</button>
        <button className='filter-text'>In a Week</button>
        <button className='filter-text'>In a month</button>
    </div>
    </div>
  )
}

export default Filter