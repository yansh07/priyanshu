import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Project from '../components/Project';
import Skills from '../components/Skill';
import Blog from '../components/Blog';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Blog />
      
      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
        
        .bg-pos-0 {
          background-position: 0% 50%;
        }
        
        .bg-pos-100 {
          background-position: 100% 50%;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
      `}</style>
    </div>
  );
}


export default Home