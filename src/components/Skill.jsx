import React from "react";

const techCategories = [
  {
    title: "Frontend",
    backgroundText: "FRONTEND",
    techs: [
      { name: "React", iconClass: "devicon-react-original colored" },
      { name: "HTML5", iconClass: "devicon-html5-plain colored" },
      { name: "CSS", iconClass: "devicon-css3-plain colored" },
      { name: "Tailwind", iconClass: "devicon-tailwindcss-plain colored" },
      { name: "Vite", iconClass: "devicon-vitejs-plain colored" },
    ],
  },
  {
    title: "Backend",
    backgroundText: "BACKEND",
    techs: [
      { name: "Node.js", iconClass: "devicon-nodejs-plain colored" },
      { name: "Express", iconClass: "devicon-express-original colored" },
    ],
  },
  {
    title: "Database",
    backgroundText: "DATABASE",
    techs: [
      { name: "MongoDB", iconClass: "devicon-mongodb-plain colored" },
      { name: "MySQL", iconClass: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Languages",
    backgroundText: "LANGUAGES",
    techs: [
      { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
      { name: "Python", iconClass: "devicon-python-plain colored" },
      { name: "C++", iconClass: "devicon-cplusplus-plain colored" },
    ],
  },
];

function Skills() {
  return (
    // centers everything, applies primary background
    <div className="flex font-mono text-gray-300 min-h-screen w-full items-center justify-center p-4 sm:p-6 lg:p-8 backdrop-blur-2xl bg-black/20 lg:px-16 xl:-ml-2 xl:px-42">
      {/* main content box with the max-width constraint */}
      <div className="w-full max-w-6xl">
        <h1
          className="pt-10 md:px-1 md:-mt-48 xl:-mt-78 font-mono bg-gradient-to-r from-blue-100 to-blue-300
                  bg-clip-text text-transparent text-4xl xl:text-5xl px-6 font-bold mb-4"
        >
          Sk
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
            ills
          </span>
        </h1>

        {/* tech strip grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="relative border-1 border-gray-700 rounded-2xl p-3 overflow-hidden bg-card/50 backdrop-blur-md hover:shadow-glow transition-all duration-300 group hover:rotate-z-6 hover:brightness-200 hover:border-2"
            >
              {/* bg tech text*/}
              <span className="absolute z-0 justify-items-center -right-4 text-[5rem] sm:text-[7rem] font-black text-gray-900 select-none pointer-events-none transition-transform duration-500 group-hover:scale-110">
                {category.backgroundText}
              </span>

              {/* title*/}
              <h3 className="relative z-10 text-2xl font-bold  mb-2 text-gray-300">
                {category.title}
              </h3>

              {/* icons */}
              <div className="relative z-10 flex flex-wrap gap-4">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg"
                  >
                    <i className={`${tech.iconClass} text-2xl`}></i>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
