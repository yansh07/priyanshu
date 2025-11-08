"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, delay: 1.2 } },
    hover: { scale: 1.05, boxShadow: "0px 0px 8px rgba(0,255,255,0.7)" },
    tap: { scale: 0.95 },
  };

  return (
    <section id="home" className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
      <div className="relative z-10 flex flex-col space-y-6 max-w-4xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto"
        >
          <Image
            src="/ghibli.webp"
            width={120}
            height={120}
            alt="Priyanshu Avatar"
            className="rounded-full border-4 border-cyan-500 shadow-[0_0_20px_4px_rgba(0,255,255,0.4)]"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="font-bold text-4xl md:text-6xl text-white flex flex-col items-center gap-2"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Priyanshu
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="font-light text-2xl md:text-4xl text-gray-300"
        >
          I{" "}
          <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Engineer the Invisible
          </span>
        </motion.h2>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 rounded-full bg-transparent border-2 border-cyan-500 text-cyan-300 text-lg font-medium 
                       hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-lg"
          >
            View Resume
          </motion.a>
          <motion.a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-medium 
                       hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Book a Call
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;