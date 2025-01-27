import React from 'react'
import "./contact.css"
import Phone from "../../images/test1.png"
import Email from "../../images/test1.png"
import Adress from "../../images/test1.png"
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink, faLinkedin,faEnvelope, faCity} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_i82pked',
       'template_fnaf4zk',
        formRef.current, 'DkOj9elZ7Ff3lF7Aq')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    }
    );
};
  
  return (
    <div className='c'>
      <hr></hr>
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">   
          Get in touch </h1>
          <div className="c-info">
            <div className="c-info-item">
         <a href='https://www.linkedin.com/in/peter-ross-0826b9233/ ' className='c-info-item'>    
         <FontAwesomeIcon icon={faLink} className='c-icon' />
            LinkedIn
             </a>
           
          </div>
          <div className="c-info-item">
          <a href="mailto:peteross@outlook.dk" className='c-info-item'>   
          <FontAwesomeIcon icon={faEnvelope} className='c-icon' />
          peteross@outlook.dk
          </a>
          </div>
          <div className="c-info-item">
             
          <FontAwesomeIcon icon={faCity} className='c-icon' />
          København
       
          </div>
          </div>
         
        </div>
        <div className="c-right">
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder='Name' name="user_name" />
          <input type="text" placeholder='Subject' name="user_subject" />
          <input type="text" placeholder='Your email' name="user_email" />
          <textarea rows="5" placeholder='Message' name="message" />
          <button> Send</button>
          {done && "Message sent - Thank you!"}
        </form>
 </div>
        </div>
        
  );
};

export default Contact