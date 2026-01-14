"use client";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-10 pb-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="text-center max-w-4xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-slate-900 dark:text-white">Full Stack</span>
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Developer & ML Engineer
          </span>
        </h1>

        <p className="text-xl font-sans md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          I&apos;m Priyanshu, a full-stack dev
          passionate about <span className="text-orange-500 font-semibold">well-architected</span>,{" "}
          <span className="text-orange-500 font-semibold">scalable software systems</span>. <br/>My projects reflect a system design mindset - thoughtful backend architecture, clean interfaces, and user-centric frontends. I value maintainability as much as performance.<br/> <br/>Alongside development, I actively practice <span className="text-range-500 font-semibold">Data Structure and Algorithms</span> and am expanding into <span className="text-orange-500 font-semibold">Machine Learning</span> to better understand modern, data-driven systems.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
            <FaArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
          <a
            href="/resume.pdf"
            className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 rounded-lg font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <p className="text-sm font-medium">Scroll to explore</p>
          <FaArrowDown className="text-xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}