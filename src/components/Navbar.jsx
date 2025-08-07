import React from 'react';

export const Navbar = () => {
  return (
    <nav className="max-w-4xl px-6 py-3 mx-auto my-6 transition-all duration-200 border rounded-full bg-white/5 hover:ease-in-out hover:scale-95 border-white/20 backdrop-blur-lg">
      <ul className="flex justify-center gap-6 font-medium text-white">
        <li className="transition duration-200 hover:text-pink-400">Home</li>
        <li className="transition duration-200 hover:text-pink-400">Projects</li>
        <li className="transition duration-200 hover:text-pink-400">Resume</li>
        <li className="transition duration-200 hover:text-pink-400">Links</li>
        <li className="transition duration-200 hover:text-pink-400">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
