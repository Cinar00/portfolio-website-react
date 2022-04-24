import React, { useContext } from 'react'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import cv from './BytullahÇ_nar-CV.pdf'

import './Services.css'
import Card from '../Card/Card'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
    const transition = {duration : 1, type: 'spring'}

    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>

        {/* left side */}
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>services</span>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quisquam nesciunt <br /> pariatur alias magnam sit 
                  dolorum harum. Deserunt!
            </span>
            <a href={cv} download >
                <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>
        
        {/* right side */}
        <div className="cards">

            <motion.div 
                initial={{left: '25rem'}}
                whileInView={{left: '14rem'}}                
                transition={transition}
                style={{ left: '14rem' }}>
                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                />
            </motion.div>   
            <motion.div 
                initial={{ left: "-11rem", top: "12rem" }}
                whileInView={{ left: "-4rem" }}
                transition={transition}
                style={{ top: '12rem', left: '-4rem' }}>
                <Card 
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {'Html, Css, JavaScript, React, Bootstrap, Tailwind'}
                />
            </motion.div> 
            <motion.div 
                initial={{ top: "19rem", left: "25rem" }}
                whileInView={{ left: "12rem" }}
                transition={transition} 
                style={{ top: '19rem', left: '12rem' }}>
                <Card 
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {'Lorem ispum dummy text are usually use in section where we need some random text'}
                />
            </motion.div> 
            <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>

        </div>
    </div>
  )
}

export default Services