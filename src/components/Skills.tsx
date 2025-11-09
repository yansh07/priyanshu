"use client";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiPython,
  SiFlask,
  SiExpress,
  SiMysql,
  SiVercel,
  SiGit,
  SiGithub,
  SiRailway,
} from "react-icons/si";

const Skills = () => {
  const skillIcons = [
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiCplusplus,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiPython,
    SiFlask,
    SiExpress,
    SiMysql,
    SiVercel,
    SiGit,
    SiGithub,
    SiRailway,
  ];

  const techLogos = skillIcons.map((Icon, i) => ({
    node: <Icon key={i} />,
  }));

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 px-4"
      style={{
        backgroundImage: "url('/skill.webp')",
      }}
    >
      {/* 🔮 dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🌌 Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12 drop-shadow-lg">
          Skills
        </h2>

        {/* Logo Loop container */}
        <div className="relative rounded-xl overflow-hidden flex items-center justify-center shadow-2xl  py-16 md:py-20">

          <div className="relative z-10 w-full px-4">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={60}
              pauseOnHover
              scaleOnHover
              ariaLabel="Skill logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
