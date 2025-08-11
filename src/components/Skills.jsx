import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TechSkillsAccordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const Language = [
    {name: 'C', icons: "devicon-c-plain colored"},
    {name: "HTML", icons: "devicon-html5-plain colored"},
    {name: "CSS", icons: "devicon-css3-plain colored"},
    {name: "JavaScript", icons: "devicon-javascript-plain colored"},
    {name: "TypeScript", icons: "devicon-typescript-plain colored"},
    {name: "Python", icons: "devicon-python-plain colored"}
  ];

  const Developer = [
    {name: "Git", icons: "devicon-git-plain colored"},
    {name: "GitHub", icons: "devicon-github-original colored"},
    {name: "Pandas", icons: "devicon-pandas-plain"},
    {name: "NumPy", icons: "devicon-numpy-plain"},
    {name: "PostgreSQL", icons: "devicon-postgresql-plain"},
    {name: "MongoDB", icons: "devicon-mongodb-plain colored"},
    {name: "MySQL", icons: "devicon-mysql-plain-wordmark"},
    {name: "SQLite", icons: "devicon-sqlite-plain-wordmark"},
    {name: "NodeJS", icons: "devicon-nodejs-plain colored"},
    {name: "Bootstrap", icons: "devicon-bootstrap-plain colored"},
  ];

  const Tools = [
    {name: "Tailwind", icons: "devicon-tailwindcss-original colored"},
    {name: "Flask", icons: "devicon-flask-original"},
    {name: "StreamLit", icons: "devicon-streamlit-plain colored"},
    {name: "Vercel", icons: "devicon-vercel-original"},
    {name: "Replit", icons: "devicon-replit-original colored"},
    {name: "Playwright", icons: "devicon-playwright-plain colored"},
    {name: "Bash", icons: "devicon-bash-plain colored"},
    {name: "NPM", icons: "devicon-npm-original-wordmark colored"},
    {name: "Supabase", icons: "devicon-supabase-plain colored"},
    {name: "Vite", icons: "devicon-vite-original colored"},
  ];

  const accordionData = [
    {
      id: 'languages',
      title: 'Languages',
      items: Language
    },
    {
      id: 'frameworks',
      title: 'Frameworks and APIs',
      items: Developer
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      items: Tools
    }
  ];

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? null : accordionId);
  };

  const TechLabel = ({ tech, index }) => (
    <div
      className="relative p-3 overflow-hidden transition-all duration-300 border rounded-lg group bg-gray-800/50 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 hover:shadow-lg"
      style={{ 
        animationDelay: `${index * 0.1}s`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
    >
      {/* Blur background overlay */}
      <div className="absolute inset-0 rounded-lg backdrop-blur-xl" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-2 text-center">
        <div className="text-2xl md:text-3xl">
          <i className={tech.icons} style={{ fontSize: 'inherit' }}></i>
        </div>
        <span className="w-full text-sm font-medium text-white truncate md:text-base">
          {tech.name}
        </span>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );

  return (
    <div className="px-8 md:px-40">
      {/* Include DevIcons CDN */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />
      
      <div className="max-w-7xl">
        {/* Header */}
        <div className="mt-16 mb-8 mr-8 text-center md:mr-48 lg:mr-96 lg:-ml-16 xl:mr-80 xl:-ml-96 xl:mt-24">
          <h1 className="mb-4 text-4xl font-bold text-white xl:mr-40">
            Technical Skills
          </h1>
        </div>

        {/* Accordion Container */}
        <div className="grid grid-cols-1 gap-3 xl:gap-12 md:grid-cols-1 lg:grid-cols-3">
          {accordionData.map((accordion) => (
            <div
              key={accordion.id}
              className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transition-all duration-300 ${
                openAccordion === accordion.id ? 'lg:col-span-3 lg:row-span-1' : ''
              }`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(accordion.id)}
                className="flex items-center justify-between w-full px-6 py-4 text-left transition-all duration-300 "
              >
                <h3 className="pr-4 text-lg font-bold text-white truncate md:text-xl lg:text-xl">
                  {accordion.title}
                </h3>
                <div className="flex-shrink-0">
                  {openAccordion === accordion.id ? (
                    <ChevronUp className="w-6 h-6 transition-transform duration-300 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 transition-transform duration-300 text-white/70" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openAccordion === accordion.id 
                    ? 'max-h-96 lg:max-h-none opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  {/* Scrollable container for small screens, normal for large screens */}
                  <div className={`${
                    openAccordion === accordion.id 
                      ? 'max-h-80 lg:max-h-none overflow-y-auto lg:overflow-visible' 
                      : 'overflow-hidden'
                  } scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent`}>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3">
                      {accordion.items.map((tech, index) => (
                        <TechLabel key={tech.name} tech={tech} index={index} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations and scrollbar */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar styles */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          border: none;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default TechSkillsAccordion;