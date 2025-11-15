'use client';
import Navbar from "@/components/Navbar";
import Firsthero from "@/components/Firsthero";
import HeroBody from "@/components/HeroBody";
import Aboutme from "@/components/Aboutme";
import Tech from "@/components/Tech";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden max-w-4xl mx-auto
                 font-sans 
                 "
    >
        <Navbar />
        <Firsthero />
        <HeroBody />
        <Aboutme />
        <Tech />
        <Projects />
    </div>
  );
}