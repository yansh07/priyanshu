import React from "react";

function Navbar() {
  return (
    <div className="sticky top-0 md:absolute md:pt-6 md:px-6 lg:pt-12 lg:px-12 xl:px-12 xl:pt-12">
      <nav className="border max-w-screen flex flex-wrap rounded-2xl p-2 bg-transparent hover:shadow-blue-500 shadow backdrop-blur-3xl md:max-w-sm">
        <img src="/pk.jpg" alt="priyanshu" className="w-12 h-12 rounded-lg" />
        <span className="font-[satoshi] text-gray-200 font-semibold text-2xl tracking-tight px-2 pt-1">
          Priyanshu
        </span>
        <a href="/resume.pdf" className="pt-2" target="_blank">
          <span
            className="font-[satoshi] text-gray-300 font-normal text-xl border border-gray-500 rounded-4xl px-5 py-2 ml-16 
  bg-gradient-to-r from-gray-400 to-white/10 brightness-125
  transition-all duration-500 ease-in-out
  hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] hover:brightness-150 hover:bg-gradient-to-r hover:from-[#043492] hover:via-[#362424] hover:to-[#adad03]"
          >
            Resume
          </span>
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
