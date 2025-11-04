'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightFromLine, Github } from "lucide-react";
import { motion } from "framer-motion";
interface Project {
  id: number;
  title: string;
  icon: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  techStack?: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "PlanIt",
    icon: "/icon.svg",
    description:
      "Engineered a full-stack Notes App with JWT and Auth0 authentication, securing user data for 50+ active users.",
    liveUrl: "https://planitfirst.vercel.app/",
    githubUrl: "https://github.com/yansh07/todo-frontend/",
    techStack: ["React.js", "Express.js", "Node.js" ,"MongoDB"],
  },
  {
    id: 2,
    title: "Shortly",
    icon: "/shortly.webp",
    description:
      "A magical way to shorten your long url, into a small, portable piece of line.",
    liveUrl: "https://shortleepro.vercel.app/",
    githubUrl: "https://github.com/yansh07/shortly/",
    techStack: ["Next.js", "PostgreSQL", "Typescript", "Prisma"],
  },
  {
    id: 3,
    title: "Friday",
    icon: "/ai.webp",
    description:
      "Developed a voice-activated AI assistant using GPT for command processing. Automated Task Execution with Playwright.",
    liveUrl: "https://github.com/yansh07/AiAssistant",
    githubUrl: "https://github.com/yansh07/AiAssistant",
    techStack: ["Python", "OpenAI", "Edge TTS", "Porcupine"],
  },
  {
    id: 4,
    title: "Portfolio",
    icon: "/ghibli.webp",
    description:
      "Built a portfolio website using React.js, Next.js, TypeScript and styled with Tailwind CSS.",
    liveUrl: "https://priyanshu8.vercel.app/",
    githubUrl: "https://github.com/yansh07/priyanshu/",
    techStack: ["Next.js", "Typescript", "TailwindCSS", "Vercel"],
  },
  {
    id: 5,
    title: "Nimbus",
    icon: "/logo.webp",
    description:
      "A simple and responsive weather application built with React.js + Vite + Tailwind CSS.",
    liveUrl: "https://chaiandrain.vercel.app/",
    githubUrl: "https://github.com/yansh07/weather-app",
    techStack: ["React.js", "OpenWeather API", "JavaScript", "Node.js"],
  },
];

function Projects() {
  const showAll = true;
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 5);

  return (
    <div className="p-4 items-center justify-items-center mx-auto max-w-lg py-4  grid overflow-hidden">
      <div>
        <h1 className="dark:text-white font-mono font-bold text-xl md:text-3xl mb-8">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="space-y-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    "linear-gradient(to right, #ec4899, #3b82f6, #8b5cf6)",
                    "linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Card content */}
              <div className="backdrop-blur-3xl relative border-2 border-dashed dark:border-gray-700 border-gray-300 bg-white dark:bg-[#060000] p-5 rounded-lg hover:border-solid hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                <div className="font-mono">
                  {/* Title with icon */}
                  <motion.h1
                    className="font-bold text-xl mb-3 dark:text-gray-300 text-gray-800 flex gap-3 items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={project.icon}
                        alt={`${project.title} icon`}
                        width={28}
                        height={28}
                        className="rounded-md"
                      />
                    </motion.div>
                    {project.title}
                  </motion.h1>

                  {/* Description */}
                  <p className="leading-relaxed dark:text-gray-400 text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack (optional) */}
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="grid grid-cols-2 gap-3 font-light">
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-sm dark:text-gray-300 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <ArrowRightFromLine className="w-4 h-4" />
                        </motion.div>
                        <span className="group-hover/link:underline underline-offset-2">
                          Live
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-sm dark:text-gray-300 text-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group/link"
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.div>
                        <span className="group-hover/link:underline underline-offset-2">
                          GitHub
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;