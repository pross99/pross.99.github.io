import React from 'react'
import "./contact.css"
import Phone from "../../images/test1.png"
import Email from "../../images/test1.png"
import Adress from "../../images/test1.png"
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


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
          Smid gerne en besked min vej! </h1>
          <div className="c-info">
            <div className="c-info-item">
            <img  src={Phone}alt="" className="c-icon" />
            +45 31 43 09 67
          </div>
          <div className="c-info-item">
          <img  src={Email}alt="" className="c-icon" />
          peteross@outlook.dk
          </div>
          <div className="c-info-item">
          <img  src={Adress}alt="" className="c-icon" />
          København
          </div>
          </div>
         
        </div>
        <div className="c-right">
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder='Navn' name="user_name" />
          <input type="text" placeholder='Emne' name="user_subject" />
          <input type="text" placeholder='Email' name="user_email" />
          <textarea rows="5" placeholder='Besked' name="message" />
          <button> Send</button>
          {done && "Besked sendt"}
        </form>
 </div>
        </div>
        
  );
};

export default Contact