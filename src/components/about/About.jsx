import React from 'react'
import "./about.css"
import bob from "../../images/bob.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlassArrowRight } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='a'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img 
          src={bob}
           alt=""
            className="a-img" 
            />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">Current position</h1>
        <p className="a-sub">
        After earning my degree as a 'Datamatiker,' I have been working as a second-level support for companies across Europe, assisting them in effectively utilizing a website builder tool.
        </p>
        <p className="a-desc">
         I have gained expiernce in working closly with others - and nationalities from around the globe. I have also honed my skills in writing more complex SQL quireies
        </p>
        <div className="a-kommune">
        <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
          <div className="a-kommune-texts">
          <p>I am however still itching for my first develop postition</p>
          <p>Aprat from the tech stacks i most comfortable in, I have also worked with integrating external OAuth APIs, deployment of docker images to cloud services and writing server functions </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About