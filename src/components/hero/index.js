import React from 'react'
import "../hero/hero.css"
import '../talescard/talescard.css'
import TalesCard from '../talescard'

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="container h-100">
        <div className='d-flex align-items-center h-100'>
          <TalesCard heading="Timeless Tales" btnText="See Books" link="books" />
        </div>
      </div>
    </div>
  )
}

export default Hero
