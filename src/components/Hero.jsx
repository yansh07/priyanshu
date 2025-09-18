import HeroTitle from "./Typewriter";
import { useState } from "react";

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-36 md:py-40 lg:ml-12 pb-8 md:pb-14">
      <section 
        className="max-w-6xl w-full relative"
        onMouseMove={handleMouseMove}
      >
        {/* bg floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-500 rounded-full animate-ping opacity-40"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left side - name and intro */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="relative">
              <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl font-mono leading-tight">
                <span className="
                  bg-gradient-to-r from-white via-blue-200 to-blue-500 
                  bg-clip-text text-transparent
                  hover:bg-gradient-to-r hover:from-blue-400 hover:via-white hover:to-purple-400
                  transition-all duration-1000 ease-in-out cursor-default
                  animate-gradient bg-300% bg-pos-0 hover:bg-pos-100
                ">
                  Software Engineer
                </span>
                <HeroTitle />
              </h1>
              
              {/* glitch effect overlay */}
              <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300">
                <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl font-mono leading-tight text-red-500 transform translate-x-1">
                  Software Engineer
                </h1>
              </div>
            </div>

            <p className="
              text-gray-300 font-mono text-lg md:text-xl xl:text-2xl leading-relaxed
              hover:text-gray-100 transition-colors duration-500
              relative group cursor-default
            ">
              <span className="relative z-10">
                Just another BCA 2nd year kid, exploring 
                <span className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"> code</span> and 
                <span className="text-purple-400 font-semibold hover:text-purple-300 transition-colors duration-300"> consciousness</span>.
                <br />
                Decorating chaos with 
                <span className="
                  bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent
                  hover:from-green-300 hover:to-blue-300 transition-all duration-500
                "> MERN</span> and 
                <span className="
                  bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent
                  hover:from-yellow-300 hover:to-red-300 transition-all duration-500
                "> Python</span>.
              </span>
              
              {/* glow effect */}
              <div className="
                absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500
              "></div>
            </p>
          </div>

          {/* Right side - Image and Social Links */}
          <div className="flex flex-col items-center space-y-6">
            <div className="relative group">
              {/* meri image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/pk.jpg"
                  alt="priyanshu"
                  className="
                    w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 object-cover
                    rounded-2xl transition-all duration-500
                    group-hover:scale-105 group-hover:brightness-110
                  "
                />
                
                {/* overlay effects */}
                <div className="
                  absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-transparent to-purple-500/20
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                "></div>
                
                {/* border glow effect  */}
                <div className="
                  absolute inset-0 rounded-2xl border-2 border-transparent
                  bg-gradient-to-tr from-blue-500/50 via-purple-500/50 to-blue-500/50
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                " style={{
                  background: 'linear-gradient(45deg, rgba(59,130,246,0.5), rgba(147,51,234,0.5), rgba(59,130,246,0.5))',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease infinite'
                }}></div>
              </div>

              {/* ring animation */}
              <div className="
                absolute -inset-4 rounded-full border border-blue-500/30
                opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500
              "></div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center">
              {[
                { href: "https://github.com/yansh07", icon: "fa-brands fa-github", color: "hover:text-gray-200", hoverBg: "hover:bg-gray-800" },
                { href: "mailto:pksingh69313@gmail.com", icon: "fa-solid fa-envelope", color: "hover:text-red-400", hoverBg: "hover:bg-red-900/20" },
                { href: "https://x.com/yansh_08", icon: "fa-brands fa-square-x-twitter", color: "hover:text-blue-400", hoverBg: "hover:bg-blue-900/20" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`
                    relative p-3 rounded-xl border border-gray-600/30
                    bg-gray-800/30 backdrop-blur-sm
                    transition-all duration-300 transform
                    hover:scale-110 hover:rotate-3 ${social.hoverBg}
                    hover:shadow-lg hover:shadow-current/20
                    hover:border-current/50
                  `}>
                    <i className={`
                      ${social.icon} text-gray-500 ${social.color} text-2xl
                      transition-colors duration-300
                      group-hover:animate-bounce
                    `}></i>
                    
                    {/* ripple effect */}
                    <div className="
                      absolute inset-0 rounded-xl bg-current/10 
                      scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100
                      transition-all duration-500
                    "></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Hero;
