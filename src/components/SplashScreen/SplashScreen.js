import React, { useEffect } from 'react';
import './SplashScreen.css'; // Import the CSS file for the splash screen
import videoSource from '../../assets/SA_ANIMATED_LOGO.mp4';

const SplashScreen = ({ onEnd }) => {
    useEffect(() => {
        const video = document.getElementById('splash-video');
        video.onended = onEnd;
    }, [onEnd]);

    return (
        <div id="splash-screen">
            <video id="splash-video" autoPlay muted>
                <source src={videoSource} type="video/mp4" />
            </video>
        </div>
    );
};

export default SplashScreen;
