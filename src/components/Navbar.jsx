export const Navbar = () => {
  return (
    <header>
      <nav className="fixed flex left-0 right-0 z-[100] border border-t border-[#ffffff10] text-white/70 backdrop-blur-xl transition-all md:top-0 md:bottom-auto bottom-0 md:w-[45rem] rounded-t-2xl md:rounded-full md:mt-6 md:justify-self-center">
        <div className="container flex items-center justify-center p-3 mx-auto">
          <ul class="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
            <li className="flex transition md:flex-none hover:text-white hover:underline underline-offset-4">
              Home
            </li>
            <li className="flex transition md:flex-none hover:text-white hover:underline underline-offset-4">
              Projects
            </li>
            <li>
              <a
                href="/resume.pdf"
                className="flex transition md:flex-none hover:text-white hover:underline underline-offset-4"
              >
                Resume
              </a>
            </li>
            <li className="flex transition md:flex-none hover:text-white hover:underline underline-offset-4">
              Links
            </li>
            <li>
              <a
                href="#contact"
                className="flex transition md:flex-none hover:text-white hover:underline underline-offset-4"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
