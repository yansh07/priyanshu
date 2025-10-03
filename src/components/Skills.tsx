import React from 'react';
import {
  SiTypescript, SiJavascript, SiPython, SiCplusplus,
  SiNextdotjs, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiVite,
  SiFlask, SiNodedotjs, SiExpress,
  SiMongodb, SiMysql
} from 'react-icons/si';
import type { IconType } from 'react-icons';

type Skill = {
  name: string;
  Icon: IconType;
  level: 'Proficient' | 'Intermediate';
  color: string; // skill's glow and bar
};

const skills: Skill[] = [
  // Programming Languages
  { name: 'TypeScript', Icon: SiTypescript, level: 'Proficient', color: '#3178C6' },
  { name: 'JavaScript', Icon: SiJavascript, level: 'Proficient', color: '#F7DF1E' },
  { name: 'Python', Icon: SiPython, level: 'Proficient', color: '#3776AB' },
  { name: 'C++', Icon: SiCplusplus, level: 'Intermediate', color: '#00599C' },
  
  // Frontend
  { name: 'Next.js', Icon: SiNextdotjs, level: 'Proficient', color: '#FFFFFF' },
  { name: 'React.js', Icon: SiReact, level: 'Proficient', color: '#61DAFB' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, level: 'Proficient', color: '#06B6D4' },
  { name: 'HTML5', Icon: SiHtml5, level: 'Proficient', color: '#E34F26' },
  { name: 'CSS3', Icon: SiCss3, level: 'Proficient', color: '#1572B6' },
  { name: 'Vite', Icon: SiVite, level: 'Proficient', color: '#646CFF' },

  // Backend
  { name: 'Node.js', Icon: SiNodedotjs, level: 'Proficient', color: '#339933' },
  { name: 'Express.js', Icon: SiExpress, level: 'Proficient', color: '#000000' },
  { name: 'Flask', Icon: SiFlask, level: 'Proficient', color: '#FFFFFF' },

  // Database
  { name: 'MongoDB', Icon: SiMongodb, level: 'Proficient', color: '#47A248' },
  { name: 'MySQL', Icon: SiMysql, level: 'Proficient', color: '#4479A1' },
];

// The Skill Card Component
const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div
      className="group relative flex items-center justify-center p-4 aspect-square
                 bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg
                 transform-gpu transition-all duration-300 ease-in-out
                 hover:!bg-black/40 hover:-translate-y-2 hover:shadow-2xl"
      style={{
        // @ts-expect-error nnn
        '--skill-color': skill.color,
      }}
    >
      {/* The main icon */}
      <skill.Icon className="text-4xl sm:text-5xl text-gray-400 transform-gpu
                             transition-all duration-300 ease-in-out
                             group-hover:scale-110 group-hover:text-white" />
      
      {/* The glowing effect */}
      <div className="absolute inset-0 w-full h-full bg-[var(--skill-color)]
                      rounded-lg opacity-0 blur-2xl transition-opacity
                      duration-500 group-hover:opacity-30"></div>

      {/* The tooltip that appears on hover */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full px-3 py-2
                      bg-gray-900 border border-white/10 rounded-md
                      opacity-0 transform-gpu transition-all duration-300 ease-in-out
                      group-hover:opacity-100 group-hover:-translate-y-[110%] pointer-events-none">
        <p className="font-mono text-sm text-white whitespace-nowrap">{skill.name}</p>
        <p className={`text-xs text-center font-mono ${skill.level === 'Proficient' ? 'text-cyan-400' : 'text-yellow-400'}`}>
          {skill.level}
        </p>
        {/* Tooltip arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0
                        border-l-4 border-l-transparent
                        border-r-4 border-r-transparent
                        border-t-4 border-t-gray-900 -mb-1"></div>
      </div>
    </div>
  );
};


// The Main Skills Component
const SkillsMatrix = () => {
  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-8">
       <h1 className="text-start font-mono bg-gradient-to-r from-blue-200 to-blue-400
                       bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-10">
          Tools & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
        </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsMatrix;