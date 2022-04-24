import React from 'react'
import Wave from '../../img/wave.png'

import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'

import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="Wave" style={{ width: "100%" }} />
        <div className="f-content">
            <span>bytllhcinar@gmail.com</span>
            <div className="f-icons">
                <Instagram color='white' size='3rem' />
                <Twitter color='white' size='3rem' />
                <Github color='white' size='3rem' />
            </div>
        </div>
    </div>
  )
}

export default Footer