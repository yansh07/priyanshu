import React from "react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

function Navbar() {
  return (
    <div className="w-full mt-4 px-4 md:px-8 grid grid-cols-3 border border-gray-200 items-center mx-auto dark:text-neutral-200 dark:border-neutral-800">

      {/* LEFT (1 column) */}
      <div className="col-span-1 flex items-center">
        <h1 className="font-mono font-bold text-3xl cursor-pointer ">𝙿𝙺
        </h1>
      </div>

      {/* RIGHT (2 columns) */}
      <div className="col-span-2 grid justify-end">
        <div className="flex col-span-4 font-mono font-medium text-xl tracking-tighter px-6 gap-4 leading-tight">
          {/* <Link href={"#"} className="hover:text-gray-400 transition-colors duration-200 hover:underline hover:underline-offset-4">Projects</Link>
          <Link href={"https://medium.com/@yansh08/"} className="hover:text-gray-400 transition-colors duration-200 hover:underline hover:underline-offset-4">Blog</Link> */}
          <Link href={"/resume.pdf"} className="px-4 hover:text-gray-400 transition-colors duration-200 hover:underline hover:underline-offset-4">Resume</Link>
          <Link href={"https://github.com/yansh07/"} aria-label="Github icon">
            <SiGithub className="text-xl hover:text-gray-400 transition-colors duration-200" />
          </Link>
          <div  className="border border-gray-200 mx-4 dark:border-neutral-800"><ModeToggle /></div>
        </div>
        <div className="max-w-4xl mx-auto absolute inset-0 h-full w-full pointer-events-none ">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-gray-200 dark:bg-neutral-800"/>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-gray-200 dark:bg-neutral-800"/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
