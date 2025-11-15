import React from "react";
import { SiMedium } from "react-icons/si";
import Link from "next/link";

const blogs = [
    {
        name: "How to Use Death to Design a Life Worth Living?",
        description: "You’re going to die. So what's worth doing before you do? Most people plan their bucket list for 'someday.'",
        liveurl: "https://yansh08.medium.com/how-to-use-death-to-design-a-life-worth-living-9bf212919f16",
    },
    {
        name: "The Burden of Awareness: Dostoevsky on Intelligence and Happiness",
        description: "To be too conscious is an illness. A real thoroughgoing illness.",
        liveurl: "https://yansh08.medium.com/the-burden-of-awareness-dostoevsky-on-intelligence-and-happiness-0549a2420a33",
    },
]

const Blog = () => {
  return (
    <div className="mt-16">
      <div className="border border-neutral-200 dark:border-neutral-800 ">
        <h1 className="m-4 font-mono font-bold text-2xl dark:text-neutral-100">
          Blogs
        </h1>
      </div>

       {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 dark:border-neutral-800  mt-6">
        {blogs.map((project, idx) => (
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

            {/* links */}
            <div className="flex items-center gap-5 mt-2 dark:text-neutral-300">
              <Link
                href={project.liveurl}
                target="_blank"
                className="flex items-center gap-1 hover:underline text-sm font-mono"
              >
                <SiMedium className="w-8 h-8 hover:scale-125 transition-all duration-300 shadow-lg" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* more projects button */}
      <div className="flex justify-center mt-6 border border-neutral-200 dark:border-neutral-700">
        <Link
          href="https://medium.com/@yansh08/"
          className="px-8 m-2 py-2 rounded-full flex items-center gap-2
            bg-neutral-100 hover:bg-neutral-300 dark:bg-neutral-950 backdrop-blur-2xl border border-neutral-200 dark:hover:bg-neutral-800 transition-all font-mono dark:text-neutral-300 dark:border-neutral-700 shadow-2xl text-shadow-xl"
        >
          More Blogs →
        </Link>
      </div>
    </div>
  );
};

export default Blog;
