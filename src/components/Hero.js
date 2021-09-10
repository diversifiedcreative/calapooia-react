import React from 'react';
import ReactPlayer from 'react-player';

function Hero() {
    return (
        <ReactPlayer
            url="https://media.giphy.com/media/d6KYCCIOAdsWL4aNm4/giphy.mp4"
            playing
            loop
            muted
            height="100%"
            width="100%"
        />
    );
}

export default Hero;