import React from 'react';
import phoneIcon from '../assets/phone-icon.svg';
import emailIcon from '../assets/email-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='contact-container'>
                <span className='title'>Contact Us</span>
                <div className='contact-row'>
                    <img src={phoneIcon} alt="Phone Icon" className="icon-footer" />
                    <span>999-9999</span>
                </div>
                <div className='contact-row'>
                    <img src={emailIcon} alt="Email Icon" className="icon-footer" />
                    <span>mksdev@gmail.com</span>
                </div>
            </div>
            <div className='footer-row'></div>
            <div className='follow-container'>
                <span className='title'>Follow Us</span>
                <div className='icon-container'>
                    <img src={instagramIcon} alt="Instagram Icon" className="icon" />
                    <img src={facebookIcon} alt="Facebook Icon" className="icon" />
                    <img src={twitterIcon} alt="Twitter Icon" className="icon" />
                </div>
            </div>
        </div>
        <span className='copyright'>Mks Desenvolvimento © 2024</span>
    </footer>
  );
}

export default Footer;