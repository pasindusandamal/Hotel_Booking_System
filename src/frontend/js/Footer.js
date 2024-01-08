// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p style={{textAlign:'justify'}}>Urban Vogue Suites booking partner providing the best experience.</p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/" style={{textDecoration:'none',color:'white'}}>Home</a></li>
            <li><a href="/rooms" style={{textDecoration:'none',color:'white'}}>Rooms</a></li>
            <li><a href="/about" style={{textDecoration:'none',color:'white'}}>About Us</a></li>
            <li><a href="/contact" style={{textDecoration:'none',color:'white'}}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contac</h2>
          <ul>
            <li><a href="/" style={{textDecoration:'none',color:'white'}}>Home</a></li>
            <li><a href="/rooms" style={{textDecoration:'none',color:'white'}}>Rooms</a></li>
            <li><a href="/about" style={{textDecoration:'none',color:'white'}}>About Us</a></li>
            <li><a href="/contact" style={{textDecoration:'none',color:'white'}}>Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect With Us</h2>
          <div className="social-icons" style={{textDecoration:'none', fontSize:12}}>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p>&copy; 2024 Urban Vogue Suites. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
