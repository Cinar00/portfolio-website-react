import React, { useContext } from 'react'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

import './Works.css'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Works = () => {

    // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        {/* left side */}
        <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                  Quisquam nesciunt <br /> pariatur alias magnam sit 
                  dolorum harum. <br /> Lorem ipsum dolor sit amet consectetur pariatur alias <br />
                  nesciunt amet consectetur adipisicing elit.
            </span>
                <button className='button s-button'>Hire me</button>
            <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <motion.div 
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{ margin: "-40px" }}
                transition={{ duration: 3.5, type: "spring" }}
                className='w-mainCircle'>
                <div className='w-secCircle'>
                    <img src={Upwork} alt="upwork" />
                </div>
                <div className='w-secCircle'>
                    <img src={Fiverr} alt="Fiverr" />
                </div>
                <div className='w-secCircle'>
                    <img src={Amazon} alt="Amazon" />
                </div>
                <div className='w-secCircle'>
                    <img src={Shopify} alt="Shopify" />
                </div>
                <div className='w-secCircle'>
                    <img src={Facebook} alt="Facebook" />
                </div>
            </motion.div>
            
            {/* background circles */}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>
        </div>
    </div>
  )
}

export default Works