import React from 'react';
// import { Button } from 'reactstrap';
import './HeroVid.css';
import hero from '../vid/heroVid.mp4';

function HeroVid() {
    return (
        <div className='hero-container'>
            <video src={hero} autoPlay loop muted type="video/mp4"/>
            <div className='hero-text'>
                <h3>Welcome to </h3>
                <h1>The Calapooia River</h1>
                <p>A hidden gem in Oregon's Linn County</p>
            </div>
            {/* <div className="hero-btns">
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
            </div> */}
        </div>
    )
}

export default HeroVid;