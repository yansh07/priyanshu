import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='bg-[#060010] min-h-screen'>
        <Navbar />
        <Hero />
    </div>
  )
}

export default Home