import React, { Suspense, lazy } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Project = lazy(() => import('../components/Project'));
const Skills = lazy(() => import('../components/Skill'));
const Blog = lazy(() => import('../components/Blog'));
const Footer = lazy(() => import('../components/Footer'));

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
      
      <Suspense fallback={<div className="h-20 flex items-center justify-center"><div className="animate-spin h-6 w-6 border-2 border-blue-500 rounded-full border-t-transparent"></div></div>}>
        <Project />
        <Skills />
        <Blog />
        <Footer />
      </Suspense>
    </div>
  );
}
export default Home