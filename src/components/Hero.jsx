
export const Hero = () => {
  return (
    <header className="px-12 py-12 text-left md:py-28 md:ml-20 md:px-24">
      <div className="flex items-center mb-4 text-white/80 font-soft text-md md:text-xl md:mb-6">
        <span>Hi, I am Priyanshu</span>
        <img
          src="/pk.jpg"
          alt="Priyanshu"
          className="object-cover w-8 h-8 ml-3 border-2 rounded-full shadow-sm md:w-10 md:h-10 border-white/50"
        />
      </div>

      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 md:gap-4 xl:mr-12">
        <h1 className="text-5xl font-bold leading-none text-white font-soft md:text-6xl text-pretty">
          Full-Stack Developer
        </h1>

        <p className="text-xl hover:text-white text-white/80 font-soft md:text-2xl">
          Just another BCA 2nd Year kid, Turning coffee into code, chaos into
          clarity. Building stuff with MERN & Python.
        </p>
      </div>
      <div className="flex gap-3 py-6 mt-auto">
        <a
          href="https://github.com/yansh07"
          className="relative z-10 p-2 transition duration-200 border rounded-lg backdrop-xl md:p-3 bg-gray-800/50 hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="GitHub"
        >
          <i className="text-4xl md:text-4xl text-white/80 hover:text-white fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yansh08/"
          className="relative z-10 p-2 transition duration-200 border rounded-lg backdrop-xl md:p-3 bg-gray-800/50 hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="LinkedIn"
        >
          <i className="text-4xl md:text-4xl hover:text-white text-white/80 fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:pksingh69313@gmail.com"
          className="relative z-10 p-2 transition duration-200 border rounded-lg backdrop-xl md:p-3 bg-gray-800/50 hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="Twitter"
        >
          <i
            className="text-4xl md:text-4xl hover:text-white text-white/80 fa-brands fa-twitter"
            aria-hidden="true"
          ></i>
        </a>
        <a
          href="/resume.pdf"
          className="relative z-10 items-center p-3 text-lg font-medium transition duration-200 border rounded-lg text-white/70 hover:text-white font-soft md:p-3 md:text-2xl backdrop-xl bg-gray-800/50 hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="Resume"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Hero;
