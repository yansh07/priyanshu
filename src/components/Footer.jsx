export const Footer = () => {
  return (
    <div>
      <div class="relative mt-16 mb-4 h-[2px] w-full flex justify-center">
        <div class="absolute max-w-4xl h-[2px]"></div>
        <div class="absolute h-[2px] bg-white/20 backdrop-blur-xl rounded-full w-[300px] md:w-[450px] lg:w-[700px] xl:w-[1125px]"></div>
      </div>
      <div className="px-14 md:px-72 lg:px-80 lg:ml-12 xl:px-96 xl:ml-44">
        <div className="flex gap-3 py-6 mt-auto">
          <a
            href="https://github.com/yansh07"
            className="relative z-10 p-2 transition duration-200 backdrop-xl md:p-2 lg:p-3 hover:ease-in-out hover:scale-95"
            aria-label="GitHub"
          >
            <i className="text-4xl md:text-2xl lg:text-4xl text-white/80 hover:text-white fa-brands fa-github"></i>
          </a>
          <a
            href="mailto:pksingh69313@gmail.com"
            className="relative z-10 p-2 transition duration-200 backdrop-xl md:p-2 lg:p-3 hover:ease-in-out hover:scale-95"
            aria-label="Email"
          >
            <i className="text-4xl md:text-2xl lg:text-4xl hover:text-white text-white/80 fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://x.com/yansh_08"
            className="relative z-10 p-2 transition duration-200 backdrop-xl md:p-2 lg:p-3 hover:ease-in-out hover:scale-95"
            aria-label="Twitter"
          >
            <i
              className="text-4xl md:text-2xl lg:text-4xl hover:text-white text-white/80 fa-brands fa-twitter"
              aria-hidden="true"
            ></i>
          </a>
          
          <a
            href="https://yansh08.medium.com/"
            className="relative z-10 p-2 transition duration-200 backdrop-xl md:p-2 lg:p-3 hover:ease-in-out hover:scale-95"
            aria-label="Medium"
          >
            <i
              className="text-4xl md:text-2xl lg:text-4xl hover:text-white text-white/80 fa-brands fa-medium"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
