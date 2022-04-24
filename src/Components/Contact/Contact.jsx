import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./Contact.css"
import { themeContext } from '../../Context';

const Contact = () => {

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();

    const [ done, setDone ] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_o65x88b', 'template_kndvpxi', form.current, 'M7BHeXwgK-pGSHUOa')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
    };
  
  
  
  
    return (
    <div className='contact-form' id='Contact'>
        <div className="w-left">
            <div className="awesome">
            <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
        </div>
        <div className="c-right" >
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' required />
                <input type="email" name='user_email' className='user' placeholder='Email' required />
                <textarea name="message" className='user' placeholder='Message' required></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{ done && "Thanks for contacting me!" }</span>
                <div className='blur c-blur1'></div>
            </form>
        </div>
    </div>
  )
}

export default Contact