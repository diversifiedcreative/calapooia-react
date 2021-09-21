import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h2>Made with soul for comfort and coziness in your home</h2>
            <p>We sell tableware for your home</p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Shop now
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch Video <i className='far 
                    fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;