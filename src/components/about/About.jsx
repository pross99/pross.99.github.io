import React from 'react'
import "./about.css"
import bob from "../../images/test1.png"
import Kea from "../../images/test1.png"
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
      <h1 className="a-title">Nuværende arbejde</h1>
        <p className="a-sub">
          Partner support hos Monosolutions. 
        </p>
        <p className="a-desc">
          Siden min ansætelse i Marts 2023, har jeg hjulpet virksomheder med at bygge hjemmesider, opsætte DNS, Email troubleshooting og opslå diverse rapporter i SQL. 
        </p>
        <div className="a-kommune">
          <a href='https://github.com/pross99/Kommunevalg'>
          <img  src={Kea} alt="" className="a-kommunevalg-img" />
          </a>
          <div className="a-kommune-texts">
          <p>Dog er udvikling mere spændende, hvis jeg skal være ærlig</p>
            <p className="a-kommune-desc">
              Mine fokusområder: React & node.js .
            </p>
          </div>
      </div>
    </div>
    </div>
  )
}

export default About