'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiFlask,
  SiExpress,
  SiMysql,
  SiVercel,
  SiGit,
  SiGithub,
  SiRailway,
} from "react-icons/si";

const skills = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Python', icon: SiPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Flask', icon: SiFlask },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Railway', icon: SiRailway },
  { name: 'Docker', icon: SiDocker },
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, boxShadow: "0px 0px 10px rgba(0,255,255,0.6)" },
  };

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
        Skills
      </motion.h2>

      <motion.div 
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 justify-items-center"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg 
                       hover:border-cyan-500 cursor-pointer shadow-xl relative group"
          >
            {typeof skill.icon === 'string' ? (
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            ) : (
              <skill.icon size={50} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
            )}

            <p className="mt-3 text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {skill.name}
            </p>

            <span className="absolute inset-0 rounded-lg bg-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
