import React, { useState } from 'react';
import wowTracker from "../../images/wowTrackerImg.png"
import './HoverImage.css'

export default function HoverImage(props)  {

console.log("HEJ")
return (
    <div className="h">
        <div className="h-left"> 
            <button onClick={props.toggle} className='h-button-close'> Close</button>
        <div className="h-left-wrapper">
            <h1 className='h-name'>Item tracker/wishlist</h1>
            <p className="h-description">
           

            </p>

            <h2 className='h-intro'>Technologies used:  </h2>
            <div className="h-title">
                <div className="h-title-wrapper">
                    <div className="h-title-item"> ReactJS</div>
                    <div className="h-title-item"> Java Spring boot with MongoDB </div>
                    <div className="h-title-item"> Google Cloud </div>
                    <div className="h-title-item"> Docker</div>
                    <div className="h-title-item"> OAuth API</div>
                </div>
            </div>
        </div>
        </div>
        <div className="h-right">
            <div className="h-bg"></div>
            <img  src={wowTracker} alt="" className='h-img'/>
        </div>
        <div className='-h-button-wrapper'> 
       </div>
    </div>
  
)

}
