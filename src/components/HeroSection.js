import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/binaryCode.mov" autoPlay loop muted />
            <img src="/pictures/Me.JPG" style={{height: '20em', width: '20em', marginBottom: '100px', borderRadius: "150px"}} />
            <h1>Natrez's Portfolio</h1>
            <p>Let's Get Coding!!!</p>
            {/* <div className="hero-btns">
                <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle="btn--primary" buttonSize="btn--large">
                    Prolly DONT NEED <i className = "far fa-play-circle" />
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection
