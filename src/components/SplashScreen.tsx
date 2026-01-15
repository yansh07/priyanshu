'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2300); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 bg-white dark:bg-slate-950 z-50 flex items-center justify-center transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Image
              src="/stewie.gif"
              alt="Loading"
              width={300}
              height={300}
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </>
  );
}
