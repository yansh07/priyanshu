
import React, { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className={`
        border border-gray-500/30 max-w-4xl w-full
        flex items-center justify-between rounded-2xl p-3
        backdrop-blur-xl bg-black/20
        ${scrolled ? 'shadow-2xl shadow-blue-500/20 bg-black/40' : 'shadow-lg shadow-blue-500/10'}
      `}>
        
        <div className="flex items-center gap-3">
          <img 
            src="/pk.jpg" 
            alt="priyanshu" 
            className="w-12 h-12 rounded-lg" 
          />
          <span className="font-[satoshi] text-gray-200 font-semibold text-xl md:text-2xl xl:text-3xl tracking-tight">
            Priyanshu
          </span>
        </div>
        <a href="/resume.pdf" target="_blank">
          <span className="
            font-[satoshi] text-gray-300 font-medium text-lg md:text-xl
            border border-gray-500/50 rounded-full px-6 py-2
            bg-gradient-to-r from-gray-800/50 to-gray-700/30
          ">
            Resume →
          </span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;