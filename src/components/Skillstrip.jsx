import { useState } from "react";

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
          className={`w-5 h-5 transition-transform duration-300 ${
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
        <div className="mt-3 space-y-2 text-sm text-gray-400">{children}</div>
      )}
    </div>
  );
};

export const Skillstrip = () => {
  return (
    <div className="flex w-full px-10 mb-14 md:px-24 md:ml-20 md:-mt-20">
      {/* This div will hold all the accordion items */}
      <div className="w-full max-w-md space-y-4">
        <h2 className="mb-6 text-3xl font-bold text-white font-heading">
          What I do?
        </h2>

        <AccordionItem title="⚛️ Frontend Development">
          <p>• Developed websites and web apps.</p>
          <p>• Mobile-friendly and responsive websites.</p>
          <p>• React JS websites.</p>
        </AccordionItem>

        <AccordionItem title="⚙️ Backend Development">
          <p>• Designed backend with Flask.</p>
          <p>• Worked with APIs.</p>
        </AccordionItem>

        <AccordionItem title="👨🏻‍💻 Other skills">
          <p>• AI & Automation.</p>
          <p>• Worked with OpenAI models.</p>
        </AccordionItem>
      </div>
      {/* <div className="flex-1 w-full **h-[400px]** p-4 ml-8 bg-white/10 backdrop-blur-md rounded-2xl">
      </div> */}
    </div>
  );
};

export default Skillstrip;