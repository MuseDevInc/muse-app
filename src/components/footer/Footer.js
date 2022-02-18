import React from 'react'
import './footer.css'
// import {wave} from '../../pictures/wave.png'
import '../../pictures/wave.png'
import photo from './wave.png'
const Footer = ({img}) => {
  return (
    <footer>
         <img src={photo} alt='wavesThingSo'/>
         <img src={img} alt='wavesThingSo'/>
        <img src='wave.png' alt='wavesThingSo'/>
        <img src='../../pictures/wave.png' alt='wavesThingSo'/>
        <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
            <p>I'm a footer</p>

        </div>
        </footer>
  )
}

export default Footer