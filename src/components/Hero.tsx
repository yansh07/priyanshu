"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative grid max-w-6xl overflow-hidden
                "
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[length:40px_40px]" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col space-y-6">
        {/* Heading */}
        <h1 className="font-mono text-xl md:text-4xl  font-bold text-gray-700 dark:text-gray-300 flex items-center gap-3">
          Hi, I&apos;m
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block"
          >
            <Image
              src="/ghibli.webp"
              width={55}
              height={55}
              alt="Priyanshu Avatar"
              className="rounded-md border-2 border-gray-800 dark:border-white shadow-[0_0_15px_2px_rgba(255,255,255,0.2)] dark:shadow-[0_0_20px_4px_rgba(0,150,255,0.3)]"
            />
          </motion.div>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
            Priyanshu
          </span>
        </h1>

        {/* Subtext */}
        <h2 className="font-mono text-xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
          I {" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-400 font-extrabold">
            Engineer the Invisible
          </span>
        </h2>
      </div>

      {/* Soft gradient glow */}
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] 
                      bg-gradient-radial from-blue-400/20 to-transparent blur-3xl dark:from-cyan-500/20"
      />
    </section>
  );
};

export default Hero;
