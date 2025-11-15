import React from "react";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";

const projectData = [
  {
    name: "PlanIt",
    description:
      "Engineered a full-stack Notes App with JWT and Auth0 authentication, securing user data for 50+ active users.",
    liveUrl: "https://planitfirst.vercel.app/",
    github: "https://github.com/yansh07/todo-frontend/",
    techStack: ["React.js", "TailwindCSS", "Express.js", "MongoDB", "Node.js"],
  },
  {
    name: "Shortly",
    description:
      "Built a full-stack URL shortening platform that enables users to instantly generate secure, shareable links.",
    liveUrl: "https://shortleepro.vercel.app/",
    github: "https://github.com/yansh07/shortly/",
    techStack: ["Next.js", "TailwindCSS", "Express.js", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <div className="mt-16">
      {/* heading */}
      <div className="border border-neutral-200 dark:border-neutral-800 ">
        <h1 className="m-4 font-mono font-bold text-2xl dark:text-neutral-100">Projects</h1>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 dark:border-neutral-800  mt-6">
        {projectData.map((project, idx) => (
          <div
            key={idx}
            className="border-b md:border-r border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4"
          >

            {/* project name */}
            <h2 className="font-mono font-bold text-xl dark:text-neutral-100 hover:underline underline-offset-2 cursor-pointer">
              {project.name}
            </h2>

            {/* project description */}
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* tech stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* links */}
            <div className="flex items-center gap-5 mt-2 dark:text-neutral-300">
              <Link
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-1 hover:underline text-sm font-mono"
              >
                <LuExternalLink className="text-lg" />
                Live
              </Link>

              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-1 hover:underline text-sm font-mono"
              >
                <LuGithub className="text-lg" />
                GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* more projects button */}
      <div className="flex justify-center mt-6">
        <Link
          href="#"
          className="px-6 py-2 border border-neutral-300 dark:border-neutral-700 rounded-full flex items-center gap-2
            hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all font-mono dark:text-neutral-300"
        >
          All Projects →
        </Link>
      </div>
    </div>
  );
};

export default Projects;
