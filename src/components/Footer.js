import React from 'react';
import logo from '../images/dev-weight-logo-full.png';


const Footer = () => (
  <div className="footer">
      <img src={logo} alt="Dev Weight | Developer Tutorials" /> 
     <p className='copy'>© {new Date().getFullYear()}</p>
  </div>
);

export default Footer;