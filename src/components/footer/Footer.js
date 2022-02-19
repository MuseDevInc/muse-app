import React from 'react'
import './footer.css'
import { Box } from '@mui/material'
import photo from './wave.png'
const Footer = ({img}) => {
  return (
    <Box sx={{zIndex: 0}}>
    <footer>
        <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
        </footer>
        </Box>
  )
}

export default Footer