import React, { useState } from 'react'
import Product from '../product/Product'
import "./productList.css"
import FoodApp from "../../images/FoodApp.png"
import guldborgsund from "../../images/test1.png"
import Chat from "../../images/chat.png"
import puzzle from "../../images/puzzle.png"
import wowTrack from "../../images/wowTrackerImg.png"
import taskTracker from '../../images/taskTracker.png'
import HoverImage from './HoverImage'
import Button from "react-bootstrap/Button"


const ProductList = () => {

    const [showHover, setShowHover] = useState(false);

    const toggleImageHover = () => {
        setShowHover(!showHover);
    }



  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
        Below you will find some of the projects I have worked on. As most of my projects are passion or study related, they are not deployed anywhere. You can however click on the puzzle image below in order to read more information and a larger screenshot from the application.
        </p>
        </div>
        <div className="pl-list" >

        <a href='https://github.com/pross99/pross.99.github.io' className='pl-task'>
           
            <h4> Item tracker/wishlist for WOW</h4>
            <div className='image-container'>
            <img src={puzzle} alt="" />
        </div>
        </a>
    <Button variant="outline-info" onClick={toggleImageHover} className="me-2">Click me!</Button>

        <a href='https://github.com/pross99/FoodApp ' className='pl-task'>
            <img src={FoodApp} alt=""  />
            <h4> Afslutende eksamens opgave</h4>
            <p className='pl-p'>
            Mad leverings app - Reactnatvie // Typescript     
            </p>
        </a>
      
        <a href='https://github.com/pross99/myfirstchat' className='pl-task'>
            <img src={Chat} alt=""  />
            <h4> Chat system</h4>
            <p className='pl-p'>
                React Web-app Uarbejdet med "chat-engine"
            </p>
        </a>
        <a href='https://github.com/pross99/taskTracker' className='pl-task'>
            <img src={taskTracker} alt=""  />
            <h4> Task Tracker</h4>
            <p className='pl-p'>
                Lille javascript projekt med CRUD operationer 
            </p>
        </a>

        
        </div>
        {showHover ? <HoverImage toggle={toggleImageHover} /> : null}
    </div>
  )
}

export default ProductList