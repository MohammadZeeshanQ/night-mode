import React from 'react'
import HeroSection from './Hero.js'
import DetailSection from './/Details.js'

export default function Index({ nightMode }) {
    return (
        <div>
            <HeroSection nightMode={nightMode} />
            <DetailSection nightMode={nightMode} />
        </div>
    )
}
