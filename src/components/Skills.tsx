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
    <section className="py-24">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Skills
      </h2>

      <div
        className="relative max-w-6xl mx-auto rounded-xl overflow-hidden bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/skill.webp')",
          minHeight: "150px",  
          paddingTop: "60px", 
          paddingBottom: "60px", 
        }}
      >
        {/* overlay  */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Icons Loop */}
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
    </section>
  );
};

export default Skills;
