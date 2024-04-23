import React from 'react';
import '../styles/footer.css' 
import logo2 from '../images/logo2.png'

function Footer() {
  return (
    <footer className="footer">
    <div className='footer1'><img src={logo2} alt="DT" /></div>
    <div className='footer2'>
      <a href="#header">Back to top</a>
    </div>
    <div className='footer3'><h1>Who we are</h1>
    <p>At Digital Of Tomorrow, we're passionate about sustainable web design. Our goal is to create minimalist, user-friendly websites that make a positive impact on the environment. With every project, we're dedicated to building a better future for generations to come. </p>
    </div>
  </footer>
  );
}

export default Footer;