import React from 'react'
import './hero.css'
import Search from '../../images/search img.png'


const Hero = () => {
  return (
    <section className='hero bg'>
      <div className="inner-section">
        <div className="row">
          <div className="col">
            <h1 className='text-center mb-3'>Best food waiting for your belly</h1>
            <div className='text-center'>
            <img src={Search} alt="img" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero