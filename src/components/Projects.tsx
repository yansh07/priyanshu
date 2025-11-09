"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import Image from "next/image";
import { SiGithub } from "react-icons/si";


const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10 } },
  hover: { scale: 1.03, boxShadow: "0px 0px 20px rgba(0,255,255,0.4)" },
};
interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  variants?: typeof itemVariants;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  image,
}) => {
  const itemVariants = {
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
      variants={itemVariants}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-800/40 to-black/40 border border-gray-700/50 rounded-lg p-6 flex flex-col md:flex-row gap-6 shadow-xl relative overflow-hidden"
    >
      {/* Optional Project Image/Preview */}
      {image && (
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            className="object-cover opacity-30 blur-[1px] transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/80" />
        </div>
      )}

      <div
        className={`${
          image ? "md:w-2/3" : "w-full"
        } flex flex-col justify-between`}
      >
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
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
              <SiGithub className="w-4 h-4" /> GitHub
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
      image: "/planit.webp",
    },
    {
      title: "Shortly",
      description:
        "A magical way to shorten your long URL, into a small, portable piece of line.",
      techStack: ["Next.js", "PostgreSQL", "TypeScript", "Prisma"],
      liveLink: "https://shortleepro.vercel.app/",
      githubLink: "https://github.com/yansh07/shortly/",
      image: "/shortlee.webp",
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
        className="text-4xl font-bold text-white text-center mb-12"
        variants={itemVariants}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} variants={itemVariants} />
        ))}
      </div>

      <motion.div variants={itemVariants} className="text-center mt-12">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-lg"
        >
          View all projects <span className="text-xl">→</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
