"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center animate-pulse">
      </div>
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-8 h-8 rounded-full 
                 bg-gray-800/50 border border-gray-700/50 text-gray-400 
                 hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-75"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
      <span className="absolute inset-0 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
    </motion.button>
  );
}