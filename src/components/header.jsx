import React from 'react';
import '../styles/header.css' 
import logo from '../images/logo.png'

function Footer() {
  return (

<header id="header">
   
   <a href="#section2">About us</a>
   <a href="#section1">How it works</a>
   <img src={logo} alt="DT" />
   <a href="#section4">Prices</a>
   <a href="#section5">Partners</a>
   </header>
  );
}

export default Footer;





