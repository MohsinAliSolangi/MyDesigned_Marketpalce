import React from 'react';
import ai from '../../assets/ai.png';
import "./header.css";

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
    <div className='gpt3__header-content'>
    <h1 className=' gradient__text'> lets Build Amazing </h1> 
    <h1 className=' gradient__text'> NFT MARKETPLACE With AI </h1>  
    <p>THIS IS FIRST NFT MARKETPLACE OF AI.</p>
    </div> 
    <div className='gpt3__header-image'>
    <img src={ai} alt='ai'/>  
    </div> 
    </div>
  )
}

export default Header