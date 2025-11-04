'use client';
import React from "react";

function Buttons() {
  return (
    <div className="w-full md:max-w-3xl px-6 justify-items-center py-10 md:py-14 grid grid-cols-2 space-x-6 ">
      {/* View Resume */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full font-mono font-medium 
                   bg-white dark:bg-transparent
                   border-2 border-orange-500 
                   text-black dark:text-orange-400 
                   hover:bg-orange-500 hover:text-white 
                   dark:hover:bg-orange-500 dark:hover:text-black 
                   transition-all duration-300 shadow-md hover:shadow-lg"
      >
        View Resume
      </a>

      {/* Book a Call */}
      <a
        href={`tel:${process.env.NEXT_PHONE}`}
        className="p-2 rounded-full font-mono font-medium 
                   bg-lime-500 dark:bg-lime-400 
                   border-2 border-lime-600 dark:border-lime-500 
                   text-black hover:bg-lime-600 hover:text-white 
                   dark:hover:bg-lime-500 dark:hover:text-black 
                   transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Book a Call
      </a>
    </div>
  );
}

export default Buttons;
