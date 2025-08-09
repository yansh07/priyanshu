import { useState } from "react";
import LetterGlitch from "./Glitch";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-4 py-4 bg-transparent border backdrop-blur-lg border-white/5 rounded-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg text-left font-base text-slate-200"
      >
        <span className="truncate">{title}</span>
        <svg
          className={`w-5 h-7 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 space-y-2 text-sm text-gray-400 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const MarqueeIcons = ({ techs }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex gap-6 animate-marquee">
        {techs.concat(techs).map((tech, idx) => (
          <div key={idx} className="flex items-center flex-shrink-0 gap-2">
            <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
            <span className="text-lg text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Skillstrip = () => {
  return (
    <div className="px-10 mb-14 md:px-24 md:ml-20 md:-mt-16 lg:flex lg:flex-row lg:space-x-12">
      {/* First Column: "What I do?" section */}
      <div className="flex-1 w-full lg:w-1/2">
        <h2 className="mb-6 text-4xl font-bold text-white">What I do?</h2>
        <div className="w-full space-y-4">
          <div className="bg-[#1a1a1a]">
            <AccordionItem title="⚛️ Frontend Development">
              <p>• Developed websites and web apps.</p>
              <p>• Mobile-friendly and responsive websites.</p>
              <p>• React JS websites.</p>
            </AccordionItem>
          </div>
          <div className="bg-[#1a1a1a]">
            <AccordionItem title="⚙️ Backend Development">
              <p>• Designed backend with Flask.</p>
              <p>• Worked with APIs.</p>
            </AccordionItem>
          </div>
          <div className="bg-[#1a1a1a]">
            <AccordionItem title="👨🏻‍💻 Other skills">
              <p>• AI & Automation.</p>
              <p>• Worked with OpenAI models.</p>
            </AccordionItem>
          </div>
        </div>
      </div>
      {/* Second Column: "Tech Stack" section */}
      <div className="w-full mt-10 lg:mt-0 lg:w-1/2 ">
        <div className="relative text-white bg-transparent h-[285px] lg:w-[400px] xl:w-[550px]">
          <LetterGlitch
            glitchSpeed={50}
            centerVignette={false}
            outerVignette={false}
            smooth={true}
          />
        </div>
      </div>
      );
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes marquee {
          0% {
            transform: translateX(20%);
          }
          100% {
            transform: translateX(-200%);
          }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skillstrip;
