import React from 'react';
import './HeroVid.css';
import { Fade, Stagger } from 'react-animation-components';
import { baseUrl } from 'config';

function HeroVid() {
    return (
        <div className='hero-container'>
            <video src={baseUrl + 'vid/heroVid.mp4'} autoPlay loop muted type="video/mp4"/>
            <div className='hero-text-container'>
                <div className='hero-text-background'>
                <Stagger in delay={500} duration={1000}>
                    <Fade in >
                        <h3 className='hero-text'>Welcome to </h3>
                    </Fade>
                    <Fade in>
                        <h1 className='hero-text'>The Calapooia River</h1>
                    </Fade>
                    <Fade in>
                        <p className='hero-text'>A gem of Oregon's Linn County</p>
                    </Fade>
                </Stagger>
                </div>
            </div>
        </div>
    );
}

export default HeroVid;