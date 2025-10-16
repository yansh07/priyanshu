'use client';
import React from "react";
// import { Link } from "react-router-dom"; 
import Image from "next/image";

const projects = [
  {
    icon: "/icon.svg",
    alt: "PlanIt app icon",
    title: "Notes App: PlanIt",
    description: "Engineered a full-stack application with JWT authentication and OAuth. Implemented image upload functionality using Multer and Cloudinary.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
    liveUrl: "https://planitfirst.vercel.app",
    githubUrl: "https://github.com/yansh07/todo-frontend",
  },
  {
    icon: "/ai.webp",
    alt: "Friday AI icon",
    title: "Friday: AI Assistant",
    description: "Developed a voice-activated AI assistant using GPT for command processing. Automated Task Execution with Playwright. Integrates 3+ APIs.",
    tech: ["Python", "OpenAI", "Whisper", "Edge TTS", "Playwright"],
    liveUrl: "https://github.com/yansh07/AiAssistant", 
    githubUrl: "https://github.com/yansh07/AiAssistant",
  },
  {
    icon: "/ghibli.webp",
    alt: "Portfolio Website",
    title: "Portfolio Website",
    description: "Built a portfolio website using React, HTML, CSS and styled with Tailwind CSS. Deployed the website on Vercel, and Achieved 90+ Lighthouse score for performance and accessibility.",
    tech: ["React.js", "Tailwind CSS", "Next.js", "TypeScript", "GitHub"],
    liveUrl: "https://priyanshu8.vercel.app/", 
    githubUrl: "https://github.com/yansh07/priyanshu",
  },
  {
    icon: "/logo.webp",
    alt: "Nimbus weather app",
    title: "Nimbus: Weather App",
    description: "A simple and responsive weather application built with React + Vite + Tailwind CSS. Fetches live weather data using the OpenWeather API and displays temperature, conditions, and location details. 99% uptime on Vercel deployment.",
    tech: ["Python", "OpenAI", "Whisper", "Edge TTS", "Playwright"],
    liveUrl: "https://chaiandrain.vercel.app", 
    githubUrl: "https://github.com/yansh07/weather-app",
  }
];

// A single, reusable Project Card component
interface Project {
  icon: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}
interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div
    className="group relative border border-white/20 backdrop-blur-xl bg-black/20 p-6 rounded-2xl
               transform transition-all duration-500 ease-in-out
               lg:hover:!opacity-100 lg:hover:border-cyan-400 lg:hover:scale-[1.03] lg:hover:shadow-2xl"
  >
    <Image
      src={project.icon}
      width={48}
      height={48}
      alt={project.alt}
      className=" rounded-lg mb-4"
    />
    <h3 className="font-mono text-yellow-400 mb-2 font-bold text-2xl">
      {project.title}
      {/* Arrow ab mobile pe by default dikhega, aur hover animation sirf large screen pe hoga */}
      <span className="text-cyan-400 transform lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-in-out inline-block ml-2">→</span>
    </h3>
    <p className="font-mono text-teal-400">{project.description}</p>
    <div className="my-4">
      <ul className="font-mono text-yellow-500 flex flex-wrap gap-2">
        {project.tech.map((techItem, index) => (
          <li key={index} className="backdrop-blur-2xl bg-white/10 text-xs rounded-full py-1 px-3 transform transition-transform hover:-translate-y-1">
            {techItem}
          </li>
        ))}
      </ul>
    </div>
    {/* Links ab mobile pe by default visible hain! Hover effect sirf large screens ke liye. */}
    <div className="flex flex-row gap-8 justify-start mt-6 transform transition-all duration-500 ease-in-out
                   lg:opacity-0 lg:-translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center text-teal-400 hover:text-cyan-400 transition-colors">
        <i className="fa-solid fa-arrow-up-right-from-square text-lg transform transition-transform duration-300 group-hover/link:rotate-45"></i>
        <span className="font-mono px-2">Live</span>
      </a>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center text-teal-400 hover:text-cyan-400 transition-colors">
        <i className="fa-brands fa-github text-lg transform transition-transform duration-300 group-hover/link:scale-125"></i>
        <span className="font-mono px-2">GitHub</span>
      </a>
    </div>
  </div>
);


function Project() {
  return (
    <div className="min-h-screen text-white p-4 sm:p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden w-full">
      <section className="max-w-4xl mx-auto">
        <h1 className="font-mono bg-gradient-to-r from-yellow-300 via-red-400 to-red-600
                       bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold mb-10">
          My Projects
        </h1>
        
        <div className="grid grid-cols-1 gap-8 group/container">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;

