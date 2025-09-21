// import React from "react";
// import { Link } from "react-router-dom";

// function Project() {
//   return (
//     <div>
//       <section className="grid grid-cols-1 p-4 lg:ml-12 lg:mr-12 max-w-6xl xl:max-w-7xl xl:ml-14 xl:px-24">
//         <h1
//           className="font-mono bg-gradient-to-r from-blue-100 to-blue-300
//                   bg-clip-text text-transparent text-4xl xl:text-5xl px-4 font-bold mt-8 xl:-mt-2 mb-4"
//         >
//           Pro<span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">jects</span>
//         </h1>
//         <div
//           className="border-1 border-white/20  hover:border-cyan-400
// hover:rotate-3 hover:scale-105 hover:shadow-2xl
//  backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transform hover:transition-all hover:duration-500 hover:translate-x-8 hover:-translate-y-2
// "
//         >
//           <img
//             src="/icon.svg"
//             alt="portfolio website"
//             className="w-12 h-12 rounded-lg mb-3"
//           />
//           <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
//             Notes App: PlanIt
//           </h3>
//           <p className="font-mono text-gray-400/80">
//             Engineered a full-stack application with JWT authentication and
//             OAuth/third-party authentication. Implemented image upload
//             functionality using Multer and Cloudinary.
//           </p>{" "}
//           <br />
//           <div className="font-mono italic text-gray-400 animate-gradient">
//             {/* MongoDB, Express.JS, React.JS, Node.JS, TailwindCSS, CI/CD */}
//             <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">MongoDB</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Express.js</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">React.js</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Node.js</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">TailwindCSS</li>
//             </ul>
//           </div>
//           <div className="flex flex-row gap-12 justify-center mt-4">
//             <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-blue-900">
//                 <a href="https://planitfirst.vercel.app"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
//             <span className="text-gray-50 font-mono px-2">Live</span>
//             </a>
//             </div>
//             <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-blue-900">
//                 <a href="https://github.com/yansh07/todo-frontend"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
//             <span className="text-gray-50 font-mono px-2">GitHub</span>
//             </a>
//             </div>
//           </div>
//         </div>
//         <div
//           className="mt-6 border-1 border-white/20  hover:border-cyan-400
// hover:rotate-3 hover:scale-105 hover:shadow-2xl
//  backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transition-all hover:duration-500 hover:translate-x-8 hover:-translate-y-2

// "
//         >
//           <img
//             src="/ai.webp"
//             alt="ai assistant"
//             className="w-12 h-12 rounded-lg mb-3"
//           />
//           <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
//             Friday: AI Assistant
//           </h3>
//           <p className="font-mono text-gray-400/80">
//             Developed a voice-activated AI assistant using GPT for command processing. Automated Task Execution with Playwright. Integrates 3+ APIs (OpenAI, Whisper, Edge TTS).
//           </p>{" "}
//           <br />
//           <div className="font-mono italic text-gray-400 animate-gradient">
//             {/* MongoDB, Express.JS, React.JS, Node.JS, TailwindCSS, CI/CD */}
//             <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Python</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">OpenAI</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Whisper</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Edge TTS</li>
//                 <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Playwright</li>
//             </ul>
//           </div>
//           <div className="flex flex-row gap-12 justify-center mt-4">
//             <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-blue-900">
//                 <a href="https://github.com/yansh07/AiAssistant"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
//             <span className="text-gray-50 font-mono px-2">Live</span>
//             </a>
//             </div>
//             <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-blue-900">
//                 <a href="https://github.com/yansh07/AiAssistant"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
//             <span className="text-gray-50 font-mono px-2">GitHub</span>
//             </a>
//             </div>
//           </div>
//         </div>
//         <div className="hover:bg-[#060000] border border-gray-700 flex flex-row items-center justify-center mt-4 rounded-lg p-2 hover:brightness-200 backdrop-blur-2xl bg-black/20 hover:scale-90 hover:duration-300 ">
//             <div>
//                 <Link to="/project" className="flex items-center">
//                 <i class="fa-brands fa-wpexplorer text-gray-200 text-xl"></i>
//                 <span className="text-gray-50 font-mono text-lg px-4">More Projects</span>
//                 </Link>
//             </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Project;

import React from "react";
// Remove Link import if this is the full project page, or keep if it's a snippet.
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
    className="group relative border border-white/20 backdrop-blur-2xl bg-black/20 p-6 rounded-2xl
               transform transition-all duration-500 ease-in-out
               hover:!opacity-100 hover:border-cyan-400 hover:scale-[1.03] hover:shadow-2xl"
  >
    <img
      src={project.icon}
      alt={project.alt}
      className="w-12 h-12 rounded-lg mb-4"
    />
    <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
      {project.title}
      <span className="text-cyan-400 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out inline-block ml-2">→</span>
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
    <div className="flex flex-row gap-8 justify-start mt-6 transform transition-all duration-500 ease-in-out
                   opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
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