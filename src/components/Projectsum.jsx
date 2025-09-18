import React from "react";

function Projectsum() {
  return (
    // project1
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-12 xl:pt-8 pt-0">
      <section className="grid grid-cols-1 p-4 lg:ml-12 lg:mr-12 max-w-6xl xl:max-w-7xl xl:ml-14 xl:px-24">
        <h1
          className="font-mono bg-gradient-to-r from-blue-100 to-blue-300
                  bg-clip-text text-transparent text-5xl px-4 font-bold mt-8 xl:-mt-2 mb-8"
        >
          Pro<span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">jects</span>
        </h1>
        <div
          className="border-1 border-white/20  hover:border-cyan-400
hover:rotate-3 hover:scale-105 hover:shadow-2xl
 backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transition-all hover:duration-500 hover:-translate-y-2

"
        >
          <img
            src="/icon.svg"
            alt="portfolio website"
            className="w-12 h-12 rounded-lg mb-3"
          />
          <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
            Notes App: PlanIt
          </h3>
          <p className="font-mono text-gray-400/80">
            Engineered a full-stack application with JWT authentication and
            OAuth/third-party authentication. Implemented image upload
            functionality using Multer and Cloudinary.
          </p>{" "}
          <br />
          <div className="font-mono italic text-gray-400 animate-gradient">
            <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white hover:bg-blue-500 rounded-4xl p-1 text-sm">MongoDB</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white hover:bg-blue-500 rounded-4xl p-1 text-sm">Express.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white hover:bg-blue-500 rounded-4xl p-1 text-sm">React.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white hover:bg-blue-500 rounded-4xl p-1 text-sm">Node.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white hover:bg-blue-500 rounded-4xl p-1 text-sm">TailwindCSS</li>
            </ul>
          </div>
          <div className="flex flex-row gap-12 justify-center mt-4">
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://planitfirst.vercel.app"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">Live</span>
            </a>
            </div>
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://github.com/yansh07/todo-frontend"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">GitHub</span>
            </a>
            </div>
          </div>
        </div>

        {/* project-2 */}
        <div
          className="mt-6 border-1 border-white/20  hover:border-cyan-400
hover:rotate-3 hover:scale-105 hover:shadow-2xl
 backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transition-all hover:duration-500 hover:-translate-y-2

"
        >
          <img
            src="/ai.jpg"
            alt="ai assistant"
            className="w-12 h-12 rounded-lg mb-3"
          />
          <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
            Friday: AI Assistant
          </h3>
          <p className="font-mono text-gray-400/80">
            Developed a voice-activated AI assistant using GPT for command processing. Automated Task Execution with Playwright. Integrates 3+ APIs (OpenAI, Whisper, Edge TTS).
          </p>{" "}
          <br />
          <div className="font-mono italic text-gray-400 animate-gradient">
            <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Python</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">OpenAI</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Whisper</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Edge TTS</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Playwright</li>
            </ul>
          </div>
          <div className="flex flex-row gap-12 justify-center mt-4">
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://github.com/yansh07/AiAssistant"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">Live</span>
            </a>
            </div>
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://github.com/yansh07/AiAssistant"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">GitHub</span>
            </a>
            </div>
          </div>
        </div>

        {/* project-3  */}
        <div
          className="mt-6 border-1 border-white/20  hover:border-cyan-400
hover:rotate-3 hover:scale-105 hover:shadow-2xl
 backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transition-all hover:duration-500 hover:-translate-y-2

"
        >
          <img
            src="/pk.jpg"
            alt="portfolio website"
            className="w-12 h-12 rounded-lg mb-3"
          />
          <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
            Portfolio Website
          </h3>
          <p className="font-mono text-gray-400/80">
            Built a portfolio website using React, HTML, CSS and styled with Tailwind CSS. Deployed the website on Vercel and integrated a response form with the Formspree API. Achieved 90+ Lighthouse score for performance and accessibility.
          </p>{" "}
          <br />
          <div className="font-mono italic text-gray-400 animate-gradient">
            <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">React.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Node.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">JavaScript</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">GitHub</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Git</li>
            </ul>
          </div>
          <div className="flex flex-row gap-12 justify-center mt-4">
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://priyanshu8.vercel.app/"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">Live</span>
            </a>
            </div>
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://github.com/yansh07/priyanshu"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">GitHub</span>
            </a>
            </div>
          </div>
        </div>

        {/* project-4  */}
        <div
          className="mt-6 border-1 border-white/20  hover:border-cyan-400
hover:rotate-3 hover:scale-105 hover:shadow-2xl
 backdrop-blur-xl bg-black/20 p-4 rounded-xl hover:transition-all hover:duration-500 hover:-translate-y-2

"
        >
          <img
            src="/logo.jpg"
            alt="ai assistant"
            className="w-12 h-12 rounded-lg mb-3"
          />
          <h3 className="font-mono text-gray-200 mb-2 font-bold text-2xl">
            Nimbus: Weather App
          </h3>
          <p className="font-mono text-gray-400/80">
            A simple and responsive weather application built with React + Vite + Tailwind CSS. Fetches live weather data using the OpenWeather API and displays temperature, conditions, and location details. 99% uptime on Vercel deployment. Serves 200+ daily users with real-time weather data.
          </p>{" "}
          <br />
          <div className="font-mono italic text-gray-400 animate-gradient">
            <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">React.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Node.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Express.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">TailwindCSS</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">OpenWeatherMap API</li>
            </ul>
          </div>
          <div className="flex flex-row gap-12 justify-center mt-4">
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://chaiandrain.vercel.app/"><i class=" fa-solid text-lg font-mono fa-arrow-up-right-from-square text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">Live</span>
            </a>
            </div>
            <div className="border border-gray-700 p-1 bg-black/20 rounded-xl hover:brightness-200 hover:bg-[#060519]">
                <a href="https://github.com/yansh07/weather-app"><i class=" fa-brands fa-github text-lg font-mono text-gray-200"></i>
            <span className="text-gray-50 font-mono px-2">GitHub</span>
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projectsum;
