export const Hero = () => {
  return (
    <div className="container max-w-5xl grid-cols-1 py-4 mx-auto lg:flex lg:flex-row md:py-20 lg:py-32 xl:py-32 lg:max-w-8xl">
      
      {/* Left Column */}
      <div className="m-12 lg:m-5 md:ml-20 md:px-28">
        <p className="mb-4 text-xl font-soft text-white/80 xl:text-2xl">
          Hi, I am Priyanshu
        </p>
        <h1 className="inline-block text-5xl font-semibold leading-tight text-white lg:text-6xl font-soft md:text-6xl xl:text-7xl">
          Software Developer
        </h1>
      </div>

      {/* Right Column */}
      <div>
        <p className="m-12 text-xl leading-relaxed lg:ml-0 lg:text-xl font-soft text-white/80 max-w-prose xl:text-2xl md:ml-20 md:px-28 md:mt-3 md:text-2xl">
          Just another BCA 2nd Year kid, Turning coffee into code, chaos into clarity.
Building stuff with MERN & Python.
        </p>
      </div>

    </div>
  );
};

export default Hero;
