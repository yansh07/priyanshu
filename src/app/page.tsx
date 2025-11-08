'use client';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills"; 
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact"; 
import Footer from "@/components/Footer"; 
import SidebarNavigation from "@/components/SidebarNavigation";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden w-full 
                 bg-gradient-to-br from-[#060000] to-blue-950 dark:from-white/50 dark:blue-300 
                 text-gray-200 dark:text-gray-50 
                 font-sans // Using a clean sans-serif as base
                 "
    >
      {/* Dynamic space background component */}
      <div className="absolute inset-0 z-0 opacity-80" style={{ backgroundSize: 'cover', backgroundAttachment: 'fixed' }} />

      <div className="relative z-10"> 
        {/* <Navbar /> */}
        <SidebarNavigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog /> 
        <Contact /> 
        <Footer /> 
      </div>
    </div>
  );
}