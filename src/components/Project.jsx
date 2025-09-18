import React from "react";

function Project() {
  return (
    <div>
      <section className="grid grid-cols-1 p-4 lg:ml-12 lg:mr-12 max-w-6xl xl:max-w-7xl xl:ml-14 xl:px-24">
        <h1
          className="font-mono bg-gradient-to-r from-blue-100 to-blue-300
                  bg-clip-text text-transparent text-4xl xl:text-5xl px-4 font-bold mt-8 xl:-mt-2 mb-4"
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
            {/* MongoDB, Express.JS, React.JS, Node.JS, TailwindCSS, CI/CD */}
            <ul className="font-mono text-gray-300 flex flex-wrap gap-3">
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">MongoDB</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Express.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">React.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">Node.js</li>
                <li className="backdrop-blur-2xl bg-white/15 hover:text-white rounded-4xl p-1 hover:bg-blue-500 text-sm">TailwindCSS</li>
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
            {/* MongoDB, Express.JS, React.JS, Node.JS, TailwindCSS, CI/CD */}
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
        <div className="hover:bg-[#060000] border border-gray-700 flex flex-row items-center justify-center mt-4 rounded-lg p-2 hover:brightness-200 backdrop-blur-2xl bg-black/20 hover:scale-90 hover:duration-300">
            <div>
                <a href="../components/Projectsum.jsx">
                <i class="fa-brands fa-wpexplorer text-gray-200 text-xl pt-1"></i>
                <span className="text-gray-50 font-mono text-lg px-4">More Projects</span>
                </a>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
