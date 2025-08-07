import React from "react";

export const Navbar = () => {
  return (
    <header class="fixed z-50 w-full px-2 transform -translate-x-1/2 top-4 left-1/2 sm:px-6">
      <nav class="max-w-2xl mx-auto  border rounded-full bg-transparent  border-slate-700 backdrop-blur-lg">
        <ul class="flex flex-wrap items-center justify-center gap-4 py-4 text-sm font-normal sm:gap-6 md:gap-8 sm:text-base md:text-lg text-slate-200">
          <li className='class="transition hover:text-white hover:underline underline-offset-4"'>
            Home
          </li>
          <li className="transition hover:text-white hover:underline underline-offset-4">
            Projects
          </li>
          <li className="transition hover:text-white hover:underline underline-offset-4">
            Resume
          </li>
          <li className="transition hover:text-white hover:underline underline-offset-4">
            Links
          </li>
          <li>
            <a
              href="#contact"
              class="transition hover:text-white hover:underline underline-offset-4"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
