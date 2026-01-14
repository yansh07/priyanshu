"use client";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TechStack from "@/components/tech-stack/TechStack";
import Projects from "@/components/projects/Projects";
import Education from "@/components/education/Education";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-slate-950">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <HeroSection />
        <TechStack />
        <Projects />
        <Education />
        
        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 py-12 px-6 text-center text-slate-600 dark:text-slate-400">
          <p>
            Designed & built with <span className="text-orange-500">♥</span> by Priyanshu Kumar Singh
          </p>
          <p className="text-sm mt-2">© 2026. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}