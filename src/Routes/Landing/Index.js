import React from 'react'
import HeroSection from './Hero.js'

export default function Index({ nightMode }) {
    return (
        <div>
            <HeroSection nightMode={nightMode} />
        </div>
    )
}
