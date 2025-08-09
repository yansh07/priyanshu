export const Hero = () => {
  return (
    <header className="px-12 py-12 text-left md:py-32 md:ml-20 md:px-24">
      <p className="mb-4 text-white/80 font-soft text-md md:text-lg">
        Hi, I am Priyanshu
      </p>

      <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 md:gap-4">
        <h1 className="text-5xl font-bold leading-none text-white font-soft md:text-6xl text-pretty">
          Software Developer
        </h1>
        <p className="text-xl text-white/80 font-soft md:text-2xl max-w-prose">
          Just another BCA 2nd Year kid, Turning coffee into code, chaos into
          clarity. Building stuff with MERN & Python.
        </p>
      </div>
    </header>
  );
};

export default Hero;
