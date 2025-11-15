"use client";
import Link from "next/link";
import { SiGithub, SiGmail, SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-neutral-300 dark:border-neutral-800 py-10">
      
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">

        {/* Name  */}
        <h1 className="font-mono font-bold text-xl dark:text-neutral-100 tracking-tight">
          Priyanshu · Backend Dev
        </h1>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <Link href="https://github.com/yansh07" target="_blank" 
            className="hover:scale-110 transition-all text-neutral-700 dark:text-neutral-300">
            <SiGithub />
          </Link>

          <Link href="mailto:pksingh69313@gmail.com" target="_blank" 
            className="hover:scale-110 transition-all text-neutral-700 dark:text-neutral-300">
            <SiGmail />
          </Link>

          <Link href="https://x.com/yansh_08" target="_blank" 
            className="hover:scale-110 transition-all text-neutral-700 dark:text-neutral-300">
            <SiX />
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px w-20 bg-neutral-300 dark:bg-neutral-700 my-4"></div>

        {/* Bottom line */}
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Priyanshu. Built with Next.js + TailwindCSS.
        </p>

      </div>
    </footer>
  );
}
