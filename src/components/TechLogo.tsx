"use client";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiVite,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiOpenai,
  SiGithub,
  SiGit,
  SiVercel,
  SiRailway,
  SiSupabase,
  SiAuth0,
  SiJsonwebtokens,
  SiCloudinary,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const techLogos = [
  {
    node: <SiTypescript />,
    title: "Typescript",
  },
  {
    node: <SiJavascript />,
    title: "Javascript",
  },
  {
    node: <SiPython />,
    title: "Python",
  },
  {
    node: <TbBrandCpp />,
    title: "C++",
  },
  {
    node: <SiNextdotjs />,
    title: "Next.js",
  },
  {
    node: <SiReact />,
    title: "React.js",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
  {
    node: <SiVite />,
    title: "Vite",
  },
  {
    node: <SiFlask />,
    title: "Flask",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
  },
  {
    node: <SiExpress />,
    title: "Express.js",
  },
  {
    node: <SiMongodb />,
    title: "MongoDB",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
  },
  {
    node: <SiOpenai />,
    title: "OpenAI",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
  },
  {
    node: <SiGit />,
    title: "Git",
  },
  {
    node: <SiVercel />,
    title: "Vercel",
  },
  {
    node: <SiRailway />,
    title: "Railway",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
  },
  {
    node: <SiAuth0 />,
    title: "Auth0",
  },
  {
    node: <SiJsonwebtokens />,
    title: "JWT",
  },
  {
    node: <SiCloudinary />,
    title: "Cloudinary",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
  },
];

function TechLogo() {
  return (
    <div className="py-8  grid max-w-lg overflow-hidden px-6 md:px-0">
      <h1 className="dark:text-white font-mono font-bold text-xl md:text-3xl mb-8">
        Skills
      </h1>
      <div
        style={{ position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={35}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}

export default TechLogo;
