export const Hero = () => {
  return (
    <header className="px-12 py-12 text-left md:py-36 md:ml-20 md:px-24">
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
        <p className="text-xl text-white/80 font-soft md:text-2xl max-w-prose">
          Just another BCA 2nd Year kid, Turning coffee into code, chaos into
          clarity. Building stuff with MERN & Python.
        </p>
      </div>
      <div class="flex gap-3 py-6 mt-auto">
        <a
          href="https://github.com/yansh07"
          class="backdrop-xl relative z-10 p-2 transition duration-200 bg-[#121212] border rounded-lg hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="GitHub"
        >
          <i class="text-3xl text-white/80 hover:text-white fa-brands fa-square-github sm:text-4xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/yansh08/"
          class="backdrop-xl relative z-10 p-2 transition duration-200 bg-[#121212] border rounded-lg hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="LinkedIn"
        >
          <i class="text-3xl hover:text-white text-white/80 fab fa-linkedin sm:text-4xl"></i>
        </a>
        <a
          href="mailto:pksingh69313@gmail.com"
          class="backdrop-xl relative z-10 p-2 transition duration-200 bg-[#121212] border rounded-lg hover:ease-in-out backdrop-blur-md border-white/5 hover:scale-95"
          aria-label="Email"
        >
          <i class="text-3xl hover:text-white text-white/80 fa fa-envelope sm:text-4xl"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;
