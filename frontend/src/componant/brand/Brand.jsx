import React from 'react'
import {opensea, Magiceden,Binance,makers,makersplace } from './imports';
import "./brand.css";

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
        <div>
      <img src={opensea} alt='opensea'/>
        </div>
        <div>
      <img src={Magiceden} alt='Magiceden'/>
        </div>
        <div>
      <img src={Binance} alt='Binance'/>
        </div>
        <div>
      <img src={makers} alt='makers'/>
        </div>
        <div>
      <img src={makersplace} alt='makersplace'/>
        </div>
    </div>
  )
}

export default Brand