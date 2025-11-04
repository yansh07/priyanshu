import React from 'react'
import { Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  return (
    <nav className="w-full py-6 md:py-12 px-6">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center max-w-2xl mx-auto">
        
        {/* Left Section (Email hidden on small screens) */}
        <div className="hidden sm:flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-600 dark:text-blue-600" />
          <span className="text-green-500">•</span>
          <a
            href="mailto:pksingh69313@gmail.com"
            className="text-sm font-mono underline underline-offset-4 transition-colors text-gray-800 dark:text-white/50"
          >
            pksingh69313@gmail.com
          </a>
        </div>

        {/* Center Section (Home + Blog) */}
        <div className="flex w-full justify-between sm:w-auto sm:justify-center items-center gap-10 text-medium font-mono mt-4 sm:mt-0">
          <div className="flex space-x-6">
            <a
              href="#home"
              className="transition-colors dark:text-gray-200 text-gray-800 hover:font-bold"
            >
              Home
            </a>
            <a
              href="#blog"
              className="transition-colors dark:text-gray-200 text-gray-800 hover:font-bold"
            >
              Blog
            </a>
          </div>

          {/* Right Section (Theme Toggle) */}
          <div className="sm:ml-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
