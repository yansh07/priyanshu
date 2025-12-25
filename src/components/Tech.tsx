"use client";
import React from "react";
import {
  SiPython,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiGithub,
  SiGit,
  SiPrisma,
  SiAuth0,
  SiRedis,
  SiCelery,
  SiJsonwebtokens,
} from "react-icons/si";

const techStack = [
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Flask", icon: SiFlask },
  { name: "Celery", icon: SiCelery },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "SQLite", icon: SiSqlite },
  { name: "Prisma", icon: SiPrisma },
  { name: "JWT", icon: SiJsonwebtokens },
  { name: "Redis", icon: SiRedis },
  { name: "Auth0", icon: SiAuth0 },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const Tech = () => {
  return (
    <div>
      {/* Title */}
      <div className="mt-16 border border-neutral-200 dark:border-neutral-800">
        <h1 className="m-4 font-mono font-bold text-2xl dark:text-neutral-100">
          Stack
        </h1>
      </div>

      <div>
        {/* Icon grid container */}
        <div
          className="
        grid grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-6 
        m-4 relative overflow-hidden
      "
        >
          {/* dotted background */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.05)_1px,_transparent_1px)] 
                        [background-size:16px_16px] 
                        dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)]"></div> */}

          {techStack.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="relative group flex items-center justify-center mt-8"
              >
                {/* tooltip */}
                <span
                  className="
                absolute -top-8 opacity-0 group-hover:opacity-100 
                transition-all duration-300 
                bg-neutral-800 text-white text-xs font-mono px-2 py-1 rounded 
                dark:bg-neutral-100 dark:text-black
                pointer-events-none
              "
                >
                  {item.name}
                </span>

                {/* icon */}
                <Icon
                  className="
                  text-4xl z-10 transition-all duration-300 text-neutral-900 dark:text-neutral-300
                  group-hover:scale-125 group-hover:-rotate-6 
                  group-hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                  dark:group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.15)]
                  cursor-pointer
                "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tech;
