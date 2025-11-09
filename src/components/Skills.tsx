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
    <div>
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Skills
      </h2>

      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="max-w-6xl mx-auto px-4"
      >
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
  );
};

export default Skills;
