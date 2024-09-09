import React from "react";

import facebookIcon from '../../public/images/ico-facebook.png';
import instagramIcon from '../../public/images/ico-instagram.png';
import tiktokIcon from '../../public/images/ico-tiktok.png';
import whatsappIcon from '../../public/images/ico-whatsapp.png';
import dhLogo from '../../public/images/DH.png';  // Logo de Digital House
import { Form } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
        
        
      <div className="footer-content">
        <div className="footer-logo">
        <p style={{ color: "white" }}>Powered by  <img src="./images/DH.png" alt='DH-logo' /></p>
        </div>
        <div className="footer-icons">
          <a href="https://facebook.com" target="_blank" rel="">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="">
            <img src={tiktokIcon} alt="Tiktok" />
          </a>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;