import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";

const techSkillsData = {
  "Languages & Core Tech": [
    { name: "HTML", icons: "devicon-html5-plain colored" },
    { name: "CSS", icons: "devicon-css3-plain colored" },
    { name: "JavaScript", icons: "devicon-javascript-plain colored" },
    { name: "TypeScript", icons: "devicon-typescript-plain colored" },
    { name: "Python", icons: "devicon-python-plain colored" },
    { name: "C", icons: "devicon-c-plain colored" },
  ],
  "Frontend & Backend": [
    { name: "React", icons: "devicon-react-original colored" },
    { name: "Tailwind", icons: "devicon-tailwindcss-original colored" },
    { name: "Node.js", icons: "devicon-nodejs-plain" },
    { name: "Express.js", icons: "devicon-express-original-wordmark" },
    { name: "Flask", icons: "devicon-flask-original" },
  ],
  "Tools & Databases": [
    { name: "MongoDB", icons: "devicon-mongodb-plain-wordmark" },
    { name: "MySQL", icons: "devicon-mysql-plain-wordmark" },
    { name: "Git", icons: "devicon-git-plain colored" },
    { name: "GitHub", icons: "devicon-github-original" },
    { name: "Pandas", icons: "devicon-pandas-plain" },
    { name: "NumPy", icons: "devicon-numpy-plain" },
    { name: "Playwright", icons: "devicon-playwright-plain colored" },
    { name: "Bash", icons: "devicon-bash-plain" },
  ],
};

const SkillCard = ({ name, icons, index }) => (
  <Tilt
    className="group relative 
      h-24 w-24 sm:h-28 sm:w-28 md:h-26 md:w-26 lg:h-28 lg:w-28 xl:h-36 xl:w-36
      overflow-hidden rounded-xl border border-white/5 
      bg-gray-900/40 p-1 backdrop-blur-md 
      transition-all duration-300 hover:scale-[1.03]"
    perspective={1000}
    transitionSpeed={1500}
    scale={1.02}
  >
    {/* Animated shine effect on hover */}
    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 bg-gradient-to-tr from-cyan-400/50 to-purple-400/50 blur-xl" />

    {/* The actual card content */}
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 space-y-2 text-center transition-transform duration-300 rounded-xl bg-gray-900/60">
      <div className="text-3xl text-white md:text-4xl">
        <i className={icons}></i>
      </div>
      <span className="w-full text-sm font-medium text-white md:text-base">
        {name}
      </span>
    </div>

    {/* Custom gradient border on hover */}
    <div className="absolute inset-0 z-0 rounded-2xl transition-all duration-500 group-hover:bg-[conic-gradient(from_270deg_at_50%_50%,transparent_0deg_30deg,#19647E_200deg_270deg,transparent_360deg)] animate-spin-slow"></div>
  </Tilt>
);

const TechSkillsGrid = () => {
  useEffect(() => {
    // This is where i will add a library for staggered animations like AOS or framer-motion
    // For now, let's keep it simple with the CSS animation from my original code.
  }, []);

  return (
    <div className="min-h-screen px-4 py-16 md:px-36 lg:px-42 bg-gray-950">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <div className="mx-auto max-w-7xl">
        <div className="px-6 mb-12">
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-5xl">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Tech Stack</span>
          </h1>
          <p className="mt-4 text-lg text-purple-400 md:text-xl">
            A list of technologies I use to build modern, scalable applications.
          </p>
        </div>

        {Object.entries(techSkillsData).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h2 className="px-6 mb-8 text-2xl font-bold text-white md:text-3xl md:text-left">
              {category}
            </h2>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <SkillCard {...skill} index={index} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
      `}</style>
    </div>
  );
};

export default TechSkillsGrid;