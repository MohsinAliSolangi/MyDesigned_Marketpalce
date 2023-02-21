import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png'
import { Metamask, Minting } from '../../nftpage'
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p> <a href="#home">Home</a></p>
          <p> <a href="#wgpt3">What is GPT?</a></p>
          <p> <a href="#possibility">Open AI</a></p>
          <p> <a href="#features">Case Study</a></p>
          <p> <a href="#blog">Libarabry</a></p>
        </div>
      </div>
      <div>
        <Metamask />
      </div>
    </div>
  )
}

export default Navbar