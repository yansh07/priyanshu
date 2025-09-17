import React from 'react'
import HeroTitle from './Typewriter'

function Hero() {
  return (
    <div>
      <section className='w-full flex justify-center py-10'>
        <div className='px-8 max-w-sm grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <div className='font-bold text-5xl font-mono'>
            <span className='bg-white bg-clip-text text-transparent'>Soft</span><span className='bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent'>ware Engineer</span>
            <HeroTitle />            
          </div>
          <div className='text-gray-300 font-mono bg-clip-text text-xl'>
              <p>Just another BCA 2nd year kid, exploring code and consciousness.<br></br>Decorating chaos with MERN and Python.</p>
          </div>
          <div>
            <img src="/pk.jpg" alt="priyanshu" />
            <ul>
              <li>GitHub</li>
              <li>Email</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero