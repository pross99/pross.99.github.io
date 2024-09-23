import React from 'react'
import Product from '../product/Product'
import "./productList.css"
import FoodApp from "../../images/test1.png"
import guldborgsund from "../../images/test1.png"
import Chat from "../../images/test1.png"
import Task from "../../images/test1.png"



const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
        <h1 className="pl-title">Mine projekter</h1>
        <p className="pl-desc">
          Forhåbenligt viser min portfolio, hvad jeg har dyppet mine tæer i;
           Gamle eksamens opgave, små hygge projecter, og hvad jeg arbejder på i øjeblikket,
           kan alt sammen findes her. 
        </p>
        </div>
        <div className="pl-list" >
        <a href='https://github.com/pross99/FoodApp'>
            <img src={FoodApp} alt=""  />
            <h4> Afslutende eksamens opgave</h4>
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
                Lille javascript projekt med CRUD operationer 
            </p>
        </a>

        <a href='https://github.com/pross99/pross.99.github.io' className='pl-task'>
            <img src={Task} alt=""  />
            <h4> [nuværende projekt]</h4>
            <p className='pl-p'>
                Detaljer om nuværende projekt
            </p>
        </a>
        
        </div>
    </div>
  )
}

export default ProductList