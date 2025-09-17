import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

function HeroTitle() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ['& Writer', '& Thinker', '& Developer'];

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <div className="font-mono bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent h-12 px-18 md:px-68 lg:px-1 pt-4 text-2xl flex items-center">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
}

export default HeroTitle