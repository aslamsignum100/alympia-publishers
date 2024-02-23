import React from 'react'
import "../hero/hero.css"
import '../talescard/talescard.css'
import TalesCard from '../talescard'

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container">
        <TalesCard heading="Timeless Tales" btnText="See Books" link="books"/>
      </div>
    </div>
  )
}

export default Hero
