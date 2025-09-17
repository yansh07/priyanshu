import React from 'react'

function Navbar() {
  return (
    <div className='sticky top-0'>
        <nav className='border max-w-screen flex flex-wrap rounded-2xl p-2 bg-white/20 backdrop-blur-3xl'>
            <img src="/pk.jpg" alt="priyanshu" className='w-12 h-12 rounded-lg'/>
            <span className='font-[satoshi] text-gray-200 font-medium text-4xl tracking-tight px-2'>Priyanshu</span>
            <a href="/resume.pdf" className='pt-2'>
              <span className='font-[satoshi] text-gray-300 font-normal text-xl border-1 rounded-4xl  px-3 py-2 ml-8 bg-gradient-to-l from-[#adad03] via-[#362424] to-[#043492] brightness-125'>Resume</span>
            </a>
        </nav>
    </div>
  )
}

export default Navbar