'use client';

import { useState, useEffect } from "react";

const phrases = ["& Writer", "& Thinker", "& Developer"];

function HeroTitle() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <div className="font-mono bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent h-12 px-18 md:px-68 lg:px-1 pt-4 text-2xl flex items-center">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
}

export default HeroTitle;
