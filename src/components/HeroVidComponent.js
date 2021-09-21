import React from 'react';
import { Button } from 'reactstrap';
import './HeroVid.css';

function HeroVid() {
    return (
        <div className='hero-container'>
            <video src="https://media.giphy.com/media/d6KYCCIOAdsWL4aNm4/giphy.mp4" autoPlay loop muted />
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

export default HeroVid;