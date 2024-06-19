"use client"

import React from 'react'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
        console.log("test")
    }
    return (
        // text hero 
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                Trouvez, réservez ou louez une voiture - rapidement et facilement !
                </h1>
                <p className='hero__subtitle'>
                    Optimiser votre expérience de location de voiture grâce a notre processus de réservation simple
                </p>

                <CustomButton 
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            {/* image hero */}
            <div className="hero__image-container">
                test
            </div>
        </div>
    )
}

export default Hero