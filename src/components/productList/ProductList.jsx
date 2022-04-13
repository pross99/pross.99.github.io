import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import FoodApp from "../../img/delivery_icon.png"
import guldborgsund from "../../img/guldborgsund.jpg"
import Chat from "../../img/Chat.png"
import Task from "../../img/task.png"



const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Kreative løsninger - Det er lige mig</h1>
        <p className="pl-desc">
          Forhåbenligt viser min portfolio lige hvad i har brug for.
           Gamle eksamens opgave, små hygge projecter, og hvad jeg arbejder på i øjeblikket
           kan alt sammen findes her. 
        </p>
        </div>
        <div className="pl-list" >
        <a href='https://github.com/pross99/FoodApp'>
            <img src={FoodApp} alt=""  />
            <h4> Mit nuværrende projekt</h4>
            <p className='pl-p'>
            Mad leverings app - Reactnatvie // Typescript     
            </p>
        </a>
        <a href='https://github.com/pross99/Kommunevalg'>
            <img src={guldborgsund} alt=""  />
            <h4> Kommunevalg</h4>
            <p className='pl-p'>
            3.Semester 24 timers eksamen - Spring(java) // MySql     
            </p>
        </a>
        <a href='https://github.com/pross99/myfirstchat'>
            <img src={Chat} alt=""  />
            <h4> Chat system</h4>
            <p className='pl-p'>
                React Web-app Uarbejdet med "chat-engine"
            </p>
        </a>
        <a href='https://github.com/pross99/taskTracker' className='pl-task'>
            <img src={Task} alt=""  />
            <h4> Task Tracker</h4>
            <p className='pl-p'>
                Lille Fullstack projekt med Json backend
            </p>
        </a>
        
        </div>
    </div>
  )
}

export default ProductList