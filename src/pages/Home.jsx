import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project';
import Skills from '../components/Skill';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home