import React from 'react';
import images from '../../assets/images';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import './Footer.css';
const Footer = () => {
    const { language } = React.useContext(AppContext);
    return (
        <div className='container footer-item'>
            <div className='footer-logo'>
                <Link className='footer-logos' to='/'>
                    <img src={images.fologo} alt="logo" />
                </Link>
                <p className='foter-text'>{language.logo}</p>
            </div>
            <p className='footer-tel'>{language.footer1}</p>
            <div className='footer-links'>
                <a className='footer-link' href="#">
                    <img className='footer-play' src={images.store} alt="stor" />
                    <p className='foter-stor-text'>Apple Store</p>
                </a>
                <a className='footer-link' href="#">
                    <img className='footer-play' src={images.play} alt="play" />
                    <p className='foter-stor-text'>Google Play</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;