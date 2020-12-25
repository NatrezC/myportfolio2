import React from 'react'
import {Button} from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1>Natrez's Portfolio</h1>
            <p>Let's Get Coding!!!</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
