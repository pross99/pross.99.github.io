import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/adress.png"
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
          Kontakt oplysninger </h1>
          <div className="c-info">
            <div className="c-info-item">
            <img  src={Phone}alt="" className="c-icon" />
            +45 31 43 09 67
          </div>
          <div className="c-info-item">
          <img  src={Email}alt="" className="c-icon" />
          pete46m9@stud.kea.dk
          </div>
          <div className="c-info-item">
          <img  src={Adress}alt="" className="c-icon" />
          Rabarbervej 12, 2400 København
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