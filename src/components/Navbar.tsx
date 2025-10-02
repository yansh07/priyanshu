'use client';

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

// Enhanced Navbar Component
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center max-w-4xl mx-auto px-4 md:px-8 lg:px-0 pt-4">
      <nav
        className={`
        relative border border-gray-500/30  w-full
        flex items-center justify-between rounded-2xl p-3
        backdrop-blur-xl bg-black/20 transition-all duration-500 ease-out
        ${
          scrolled
            ? "shadow-2xl shadow-blue-500/20 bg-black/40"
            : "shadow-lg shadow-blue-500/10"
        }
        hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-black/30
        before:absolute before:inset-0 before:rounded-2xl 
        before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
      `}
      >
        {/* Logo Section with Hover Animation */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg">
            <Link href="/aboutme">
              <Image
                src="/pksingh.webp"
                alt="priyanshu"
                width={48}
                height={48}
                priority={true}
                className="rounded-lg transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          <span className="font-mono text-gray-200 font-semibold text-xl md:text-2xl xl:text-3xl tracking-tight group-hover:text-white transition-colors duration-300">
            <span className="inline-block group-hover:animate-pulse">P</span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.1s" }}
            >
              r
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.2s" }}
            >
              i
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.3s" }}
            >
              y
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.4s" }}
            >
              a
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.5s" }}
            >
              n
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.6s" }}
            >
              s
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.7s" }}
            >
              h
            </span>
            <span
              className="inline-block group-hover:animate-pulse"
              style={{ animationDelay: "0.8s" }}
            >
              u
            </span>
          </span>
        </div>

        {/* Resume Button with Enhanced Animations */}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative">
          <span
            className="
            font-[satoshi] text-gray-300 font-medium text-lg md:text-xl
            border border-gray-500/50 rounded-full px-6 py-2
            bg-gradient-to-r from-gray-800/50 to-gray-700/30
            transition-all duration-500 ease-out
            hover:scale-105 hover:text-white hover:border-blue-400/70
            hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]
            hover:bg-gradient-to-r hover:from-blue-600/30 hover:via-purple-600/20 hover:to-blue-800/30
            relative overflow-hidden
            before:absolute before:inset-0 before:bg-gradient-to-r 
            before:from-white/10 before:to-transparent before:translate-x-[-100%]
            hover:before:translate-x-[100%] before:transition-transform before:duration-700
            after:absolute after:inset-0 after:rounded-full
            after:bg-gradient-to-r after:from-blue-500/20 after:to-purple-500/20
            after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300
          "
          >
            <span className="relative z-10 flex items-center gap-2 font-mono">
              Resume
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </span>
        </a>
      </nav>
    </div>
  );
}
export default Navbar;
