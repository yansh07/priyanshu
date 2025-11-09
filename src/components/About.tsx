'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Code } from 'lucide-react';
import clsx from 'clsx';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const paragraphs = [
    <>
      Hi, I&apos;m <strong className="text-cyan-400">Priyanshu</strong> – a backend engineer,
      <span className="text-purple-400 italic"> &quot;overthinker deluxe edition&trade;&quot;</span>, and accidental
      philosopher with Wi-Fi. I build the invisible stuff that holds everything together and break
      my sleep schedule in the process.
    </>,
    <>
      Somewhere between Docker containers and Dostoevsky, I try to make sense of both code and life.
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Book className="w-3 h-3 text-purple-400" />
        <Code className="w-3 h-3 text-cyan-400" />
      </span>
    </>,
    <>
      I am a walking contradiction: I want to build an AI assistant that fetches YouTube playlists,
      while also plotting an escape to the Himalayas to live in a hut with my soulmate who may or
      may not exist outside my head. I am an <strong className="text-emerald-400">existentialist with Wi-Fi</strong>.
    </>,
    <>
      I&apos;ll question life, chaos, death, corruption, and whether happiness is a privilege —
      but still lose hours scrolling MongoDB Atlas dashboards because &quot;recruiters ko orgasm dilwana hai.&quot;
    </>,
    <>
      I am greedy for every identity: hacker, philosopher, coder, sage, mountain monk, and the guy
      who flexes Docker containers. Pick one? Nah, boring. My &quot;growth&quot; is organized chaos in a hoodie.
    </>,
    <>
      I am also, let&apos;s be honest, seeking genuine connection. I dream about meaningful relationships while simultaneously acknowledging society&apos;s shallow, transactional nature. My parents&apos; sacrifices drive me harder than any textbook.
    </>,
  ];

  return (
    <motion.section
      className="relative z-10 py-20 px-4 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-12"
        variants={itemVariants}
      >
        About Me
      </motion.h2>

      <div className="bg-gradient-to-br from-gray-800/40 to-black/40 border border-gray-700/50 rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />


        <div
          className={clsx(
            "relative z-10 text-lg leading-relaxed text-gray-300 space-y-6 transition-all duration-500",
            "max-h-[200px] overflow-hidden md:max-h-none",
            isExpanded && "max-h-[9999px]"
          )}
        >
          {paragraphs.map((content, i) => (
            <motion.p key={i} variants={itemVariants} className="relative group">
              {content}
            </motion.p>
          ))}
        </div>
        <div className="block md:hidden text-center mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
          >
            {isExpanded ? "Show less ↑" : "...Read more ↓"}
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
