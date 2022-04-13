import React from 'react'
import "./about.css"
import bob from "../../img/bob2.png"
import Kea from "../../img/Kea.jpg"
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
      <h1 className="a-title">Praktik</h1>
        <p className="a-sub">
          Jeg leder efter en praktikplads d.22 august - 28.oktober. 
        </p>
        <p className="a-desc">
          Jeg har udvalgt et par projekter som jeg har lavet under min uddannelse. 
          Jeg håber de viser nogenlunde hvad jeg kan - og hvor jeg kan forbedre mig. 
          
        </p>
        <div className="a-kommune">
          <a href='https://github.com/pross99/Kommunevalg'>
          <img  src={Kea} alt="" className="a-kommunevalg-img" />
          </a>
          <div className="a-kommune-texts">
          <p>Studernde hos kea på 4. Semester</p>
            <p className="a-kommune-desc">
              Nuværrende fag: intro til python, React-native og It-drift.
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About