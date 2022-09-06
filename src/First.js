import React from 'react'
import Navbar from './components/Navbar'
import './first.css'

const First = () => {
  return (
    <>
    <Navbar/>
       <div className='mydiv' style={{backgroundColor:'red',color:'blue'}} height={'500px'}> HELLO this is first component.</div>
    </>
  )
}

export default First