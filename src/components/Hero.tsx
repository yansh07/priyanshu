"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('/bgbg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
  <div className="relative z-10 flex flex-col space-y-6 max-w-4xl mx-auto"></div>
      <div className="relative z-10 flex flex-col space-y-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mx-auto">
          <Image
            src="/ghibli.webp"
            width={120}
            height={120}
            alt="Priyanshu Avatar"
            className="rounded-full border-4 border-cyan-500 shadow-[0_0_20px_4px_rgba(0,255,255,0.4)]"
          />
        </div>

        {/* Heading */}
        <h1 className="backdrop-blur-xs font-bold text-4xl md:text-6xl text-white flex flex-col items-center gap-2">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Priyanshu
          </span>
        </h1>

        {/* Subtext */}
        <h2 className="backdrop-blur-xs font-light text-2xl md:text-4xl text-gray-300">
          I{" "}
          <span className="font-semibold bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Engineer the Invisible
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-transparent border-2 border-cyan-500 text-cyan-800 text-lg font-medium 
                       hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            View Resume
          </a>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className="px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-medium 
                       hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
