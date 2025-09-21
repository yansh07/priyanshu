import React from "react";
import { Link } from "react-router-dom"; 

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
];

//  Project Card component
const ProjectCard = ({ project }) => (
  <div
    className="group relative border border-white/20 backdrop-blur-xl bg-black/20 p-6 rounded-2xl
               transform transition-all duration-500 ease-in-out
               lg:hover:!opacity-100 lg:hover:border-cyan-400 lg:hover:scale-[1.03] lg:hover:shadow-2xl"
  >
    <img
      src={project.icon}
      alt={project.alt}
      className="w-12 h-12 rounded-lg mb-4"
    />
    <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
      {project.title}
      {/* Arrow ab mobile pe by default dikhega, aur hover animation sirf large screen pe hoga */}
      <span className="text-cyan-400 transform lg:opacity-0 lg:-translate-x-4 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300 ease-in-out inline-block ml-2">→</span>
    </h3>
    <p className="font-mono text-gray-400/80">{project.description}</p>
    <div className="my-4">
      <ul className="font-mono text-gray-300 flex flex-wrap gap-2">
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
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center text-gray-200 hover:text-cyan-400 transition-colors">
        <i className="fa-solid fa-arrow-up-right-from-square text-lg transform transition-transform duration-300 group-hover/link:rotate-45"></i>
        <span className="font-mono px-2">Live</span>
      </a>
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="group/link flex items-center text-gray-200 hover:text-cyan-400 transition-colors">
        <i className="fa-brands fa-github text-lg transform transition-transform duration-300 group-hover/link:scale-125"></i>
        <span className="font-mono px-2">GitHub</span>
      </a>
    </div>
  </div>
);

function Project() {
  return (
    <div className=" text-gray-300 p-4 sm:p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="font-mono bg-gradient-to-r from-blue-200 to-blue-400
                       bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-10">
          My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </h1>
        
        <div className="grid grid-cols-1 gap-8 group/container">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <div className="group mt-10 border border-gray-700 flex flex-row items-center justify-center rounded-lg p-3 backdrop-blur-2xl bg-black/20
                        transform transition-all duration-300 hover:bg-cyan-900/50 hover:scale-105">
            <Link to="/project" className="flex items-center">
              <i className="fa-brands fa-wpexplorer text-gray-200 text-xl transform transition-transform duration-300 group-hover:rotate-12"></i>
              <span className="text-gray-50 font-mono text-lg px-4">More Projects</span>
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Project;