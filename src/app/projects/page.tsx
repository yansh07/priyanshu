"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 10 },
    },
    hover: { scale: 1.03, boxShadow: "0px 0px 20px rgba(0,255,255,0.4)" },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-gradient-to-br dark:from-gray-800/40 dark:to-black/40 from-gray-400 to-blue-300 border border-gray-700/50 rounded-lg p-6 flex flex-col md:flex-row gap-6 shadow-xl relative overflow-hidden"
    >

      <div
        className={`flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-800 dark:text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-cyan-600/30 text-cyan-300 rounded-full text-xs font-mono border border-cyan-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {liveLink && (
            <motion.a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link className="w-4 h-4" /> Live
            </motion.a>
          )}
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" /> GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projectsData: ProjectProps[] = [
    {
      title: "PlanIt",
      description:
        "Engineered a full-stack Notes App with JWT and Auth0 authentication, securing user data for 50+ active users.",
      techStack: ["React.js", "Express.js", "Node.js", "MongoDB"],
      liveLink: "https://planitfirst.vercel.app/",
      githubLink: "https://github.com/yansh07/todo-frontend/",
    },
    {
      title: "Shortly",
      description:
        "A magical way to shorten your long URL, into a small, portable piece of line.",
      techStack: ["Next.js", "PostgreSQL", "TypeScript", "Prisma"],
      liveLink: "https://shortleepro.vercel.app/",
      githubLink: "https://github.com/yansh07/shortly/",
    },
    {
      title: "Friday",
      description:
        "Your personal assistant to execute your commands and answer your question.",
      techStack: ["Python", "OpenAI", "Porcupine", "Edge TTS"],
      liveLink: "https://github.com/yansh07/aiassistant/",
      githubLink: "https://github.com/yansh07/aiassistant/",
    },
    {
      title: "Nimbus",
      description:
        "Minimalist weather app, built with react and enthusiasm, styled with tailwind, and live on Vercel.",
      techStack: ["React.js", "OpenWeatherMap API", "Tailwind CSS", "Javascript"],
      liveLink: "https://chaiandrain.vercel.app/",
      githubLink: "https://github.com/yansh07/weather-app",
    },
    {
      title: "Portfolio",
      description:
        "A React built Portfolio website, a safe place to showcase my skills, learnings, projects, ongoing projects, happenings, and a way to express myself.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "React.js"],
      liveLink: "https://priyanshu8.vercel.app/",
      githubLink: "https://github.com/yansh07/priyanshu/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
        className="text-4xl font-bold text-black dark:text-white text-center mb-12"
        variants={itemVariants}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
