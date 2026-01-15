"use client";
import React from "react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import ModeToggle from "../common/ModeToggle";
import { SOCIAL_LINKS } from "@/lib/constant";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 animate-slide-in-down">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="group cursor-pointer">
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 bg-clip-text text-transparent flex gap-4 items-center">
            Priyanshu
          </h1>
          <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-transparent transition-all duration-300" />
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 px-12">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="group text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
            title="Email"
          >
            <FaEnvelope className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
            title="GitHub"
          >
            <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
            title="Twitter"
          >
            <FaTwitter className="text-xl group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
}