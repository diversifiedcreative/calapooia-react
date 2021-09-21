import React from 'react';
import ReactPlayer from 'react-player';

function Hero() {
    const heroContainerStyles = {
        // position: "absolute",
        right: "0",
        bottom: "0",
        minWidth: "100%",
        minHeight: "100vh",
        // transform: "translateX(calc((100% - 100vh) / 2 ))"
    }
    
    return (
        <div style={heroContainerStyles}>
            <ReactPlayer
                url="https://media.giphy.com/media/d6KYCCIOAdsWL4aNm4/giphy.mp4"
                playing
                loop
                muted
                height="200%"
                width="200%"
            />
        </div>
    );
}

export default Hero;