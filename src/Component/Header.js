import React from 'react'
import './Header.css'
import img from '../image/PGI.S-Key-Art-4.png'
function Header() {
  return (
    <div className='header'>
      <img src={img} alt='img' />
      <div className='fade'>
        <h1>Online soon</h1>
        <h1 className='h1--grey'>Build your <span>team</span></h1>
        <h6>more details</h6>
      </div>
      <div className='fade2'></div>
      <div className='fade3'></div>
    </div>
  )
}

export default Header
