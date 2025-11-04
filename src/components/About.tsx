'use client';
import React from "react";
import { ArrowRight} from "lucide-react";
import { motion} from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative px-8 overflow-hidden py-6 md:py-4 grid bg-transparent"
    >
      <div className="max-w-lg space-y-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-800 dark:text-white font-mono">
          About Me
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-mono text-base md:text-lg leading-relaxed">
          Hi, I&apos;m Priyanshu — backend engineer, overthinker deluxe
          edition™, and accidental philosopher with Wi-Fi. I build the invisible
          stuff that holds everything together and break my sleep schedule in
          the process. Somewhere between Docker containers and Dostoevsky, I try
          to make sense of both code and life.
        </p>
        <a href="/aboutme">
          <motion.div
          whileHover={{x:20}}
          >
            <ArrowRight className="dark:text-gray-300 text-black hover:dark:text-white" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}

export default About;
