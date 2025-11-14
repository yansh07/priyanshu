'use client';
import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";

const ModeToggle = () => {
  const [theme, setTheme] = useState("light");

  const applyTheme = (t:string) => {
    if (t === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  return (
    <div className="absolute size-8 rounded-md flex items-center justify-center top-4.5 text-xl transition-colors duration-300 md:right-6 right-3">

      <button
        onClick={toggleTheme}
        className="
          relative w-8 h-8 flex items-center justify-center 
          cursor-pointer 
          transition-transform duration-300 
          active:scale-90
        "
      >
        {/* Moon Icon */}
        <FaMoon
          className={`
            absolute transition-all duration-500 
            ${theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}
          `}
        />

        {/* Sun Icon */}
        <FaSun
          className={`
            absolute transition-all duration-500 
            ${theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
          `}
        />
      </button>

    </div>
  );
};

export default ModeToggle;
