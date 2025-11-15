import React from "react";
import Link from "next/link";
import { ImLocation } from "react-icons/im";

const HeroBody = () => {
  return (
    <div className="px-6 pt-4 md:px-10 md:pt-10 tracking-tighter">
      <h1 className="font-mono text-neutral-900 dark:text-neutral-100 font-bold text-3xl">
        Priyanshu
      </h1>
      <div className="mt-3">
        <div className="transition-all hover:translate-px duration-200">
          <Link
          href={"https://x.com/yansh_08/"}
          className=" bg-gray-500/40 shadow-xl text-shadow-xl rounded-full px-2 py-1 hover:bg-neutral-300 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-500/50 dark:hover:border-gray-300/50 font-mono tracking-wide backdrop-blur-2xl"
        >
          @yansh_08
        </Link>
        </div>
        <p className="mt-6 font-medium dark:text-neutral-200 text-xl font-mono tracking-tighter">20, Curiosity drives me. Learn and grow, that&apos;s what I do.</p>

        <p className="flex font-mono tracking-tighter items-center gap-4 text-xl font-medium mt-3 dark:text-neutral-400 text-neutral-500"><ImLocation className="hover:scale-125 transition-all duration-300 hover:rotate-3"/><span>Dehradun, Uttarakhand</span></p>
      </div>
    </div>
  );
};

export default HeroBody;
