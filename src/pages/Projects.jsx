import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Skillstrip = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      image: "/portfolio.webp",
      techStack: [
        { name: "React", icon: "devicon-react-original coloured" },
        { name: "CSS", icon: "devicon-css3-plain" },
        { name: "NodeJS", icon: "devicon-nodejs-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain" }
      ],
      description: "My portfolio website made with React, styled with Tailwind and deployed on Vercel. Added custom CSS, animation and google fonts.",
      liveLink: "https://priyanshu8.vercel.app/",
      githubLink: "https://github.com/yansh07/priyanshu"
    },
    {
      id: 2,
      title: "AI Assistant",
      image: "/ai.webp",
      techStack: [
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Python", icon: "devicon-python-plain" },
        { name: "Playwright", icon: "devicon-playwright-plain" },
        { name: "Bash", icon: "devicon-bash-plain coloured" }
      ],
      description: "A CLI based AI Assistant app, used OpenAI API, OpenAI Whisper model, Microsoft Edge TTS, Porcupine and Playwright for automation.",
      liveLink: "https://github.com/yansh07/AiAssistant",
      githubLink: "https://github.com/yansh07/AiAssistant"
    },
    {
      id: 3,
      title: "Spends Tracker App",
      image: "/spend.webp",
      techStack: [
        { name: "Python", icon: "devicon-python-plain coloured" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original" },
        { name: "Streamlit", icon: "devicon-streamlit-plain coloured" },
        { name: "Pandas", icon: "devicon-pandas-plain" }
      ],
      description: "Created a minimalist spending tracker app integrated with Google Sheets. Implemented Gmail automation for monthly spending reports. Developed a secure and mobile-friendly user interface.",
      liveLink: "https://pocketflow.streamlit.app/",
      githubLink: "https://github.com/yansh07/spend-Tracker"
    },
    {
      id: 4,
      title: "ToDo App",
      image: "/todo.webp",
      techStack: [
        { name: "Python", icon: "devicon-python-plain coloured" },
        { name: "Tailwind", icon: "devicon-tailwindcss-original" },
        { name: "Streamlit", icon: "devicon-streamlit-plain coloured" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" }
      ],
      description: "Developed a full-stack ToDo web application using Flask and PostgreSQL with complete user authentication (login/register). Integrated Supabase as a remote PostgreSQL backend, handling all CRUD operations for ToDos.",
      liveLink: "https://flask-todo-app-7cqt.onrender.com/login",
      githubLink: "https://github.com/yansh07/todo"
    }
  ];

  return (
    <div className="min-h-screen px-10 py-2 ">
      <div className="mx-auto max-w-7xl md:px-32 md:-mt-16 md:mr-4 xl:px-16 lg:px-32">
        {/* Header */}
        <div className="mb-10">
          <h2 className="mt-8 mb-4 text-4xl font-bold text-white lg:mt-32 md:mt-24">My Projects</h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div key={project.id} className="group">
                {/* Large Screens Layout */}
                <div className={`hidden lg:flex items-center gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Project Image */}
                  <div className="relative flex-1 overflow-hidden transition-all duration-500 shadow-2xl rounded-2xl group-hover:shadow-purple-500/25">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-300">Tech Stack</h4>
                      <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 transition-colors duration-300 border rounded-lg bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50">
                            <i className={`${tech.icon} text-xl`}></i>
                            <span className="text-sm text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-purple-500/25"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 transform bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:bg-gray-700 hover:border-gray-600 hover:scale-105"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Small/Medium Screens Layout */}
                <div className="overflow-hidden transition-all duration-300 border lg:hidden bg-gray-800/30 backdrop-blur-sm rounded-2xl border-gray-700/50 hover:border-purple-500/50">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-64 sm:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-6">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-300">Tech Stack</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700/50">
                            <i className={`${tech.icon} text-lg`}></i>
                            <span className="text-sm text-gray-300">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    {/* Links */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-white transition-all duration-300 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-white transition-all duration-300 bg-gray-700 border border-gray-600 rounded-lg shadow-lg hover:bg-gray-600"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
    </div>
  );
};

export default Skillstrip;

