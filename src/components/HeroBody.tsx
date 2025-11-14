import React from "react";
import Link from "next/link";

const HeroBody = () => {
  return (
    <div className="px-6 pt-4 md:px-10 md:pt-10 tracking-tighter">
      <h1 className="font-mono text-neutral-900 dark:text-neutral-100 font-bold text-3xl">
        Priyanshu
      </h1>
      <div className="mt-3 hover:scale-100 transition-all duration-300 hover:-translate-x-px">
        <Link
          href={"https://x.com/yansh_08/"}
          className="border-2 bg-gray-500/20 shadow-xl text-shadow-xl rounded-full border-gray-500/50 px-2 py-1 hover:bg-neutral-300 hover:border-gray-500/60 dark:text-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-500/50 dark:hover:border-gray-300/50 font-mono tracking-wide"
        >
          @yansh_08
        </Link>
        <p className="mt-6 font-medium dark:text-neutral-200 text-xl font-mono tracking-tighter">20, Curiosity drives me. Learn and grow, that&apos;s what I do.</p>
      </div>
    </div>
  );
};

export default HeroBody;
