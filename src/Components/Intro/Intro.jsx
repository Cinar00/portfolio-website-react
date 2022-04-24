import React, { useContext } from 'react';

import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";

import "../Intro/Intro.css"
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Intro = () => {

  const transition = {duration : 2, type: 'spring'}

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer with high level of experience in web designing and development, 
                    producting the Quality work</span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className="i-socialIcons">
                <img src={Github} alt="Github" />
                <img src={Linkedin} alt="Linkedin" />
                <img src={Instagram} alt="Instagram" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="Vector1" />
            <img src={Vector2} alt="Vector2" />
            <img src={boy} alt="boy" />
            <motion.img 
              initial={{left: '-36%'}}
              whileInView={{left: '-24%'}}
              transition={transition}
              src={Glassesimoji} alt="Glasses imoji" />
            <motion.div 
              initial={{top: '-4%', left: '74%'}}
              whileInView={{left: '68%'}}
              transition={transition}
              className='i-webDeveloper'>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </motion.div>
            <motion.div
              initial={{left: '9rem', top:'18rem'}}
              whileInView={{left: '0rem'}}
              transition={transition}
              className='i-bestDesign'>
                <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award' />
            </motion.div>
        {/* blur div's */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div> 

        </div>
    </div>
  )
}

export default Intro