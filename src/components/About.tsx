"use client";
import React, { useState } from "react";
import { Book, Code } from "lucide-react";
import clsx from "clsx";

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraphs = [
    <>
      Hi, I&apos;m <strong className="text-cyan-400">Priyanshu</strong> – a
      backend engineer,
      <span className="text-purple-400 italic">
        {" "}
        &quot;overthinker deluxe edition&trade;&quot;
      </span>
      , and accidental philosopher with Wi-Fi. I build the invisible stuff that
      holds everything together and break my sleep schedule in the process.
    </>,
    <>
      Somewhere between Docker containers and Dostoevsky, I try to make sense of
      both code and life.
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Book className="w-3 h-3 text-purple-400" />
        <Code className="w-3 h-3 text-cyan-400" />
      </span>
    </>,
    <>
      I am a walking contradiction: I want to build an AI assistant that fetches
      YouTube playlists, while also plotting an escape to the Himalayas to live
      in a hut with my soulmate who may or may not exist outside my head. I am
      an <strong className="text-emerald-400">existentialist with Wi-Fi</strong>
      .
    </>,
    <>
      I&apos;ll question life, chaos, death, corruption, and whether happiness
      is a privilege — but still lose hours scrolling MongoDB Atlas dashboards
      because &quot;recruiters ko orgasm dilwana hai.&quot;
    </>,
    <>
      I am greedy for every identity: hacker, philosopher, coder, sage, mountain
      monk, and the guy who flexes Docker containers. Pick one? Nah, boring. My
      &quot;growth&quot; is organized chaos in a hoodie.
    </>,
    <>
      I am also, let&apos;s be honest, seeking genuine connection. I dream about
      meaningful relationships while simultaneously acknowledging society&apos;s
      shallow, transactional nature. My parents&apos; sacrifices drive me harder
      than any textbook.
    </>,
  ];

  return (
    <section
      className="relative z-0 py-24 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/aboutme.webp')",
      }}
    >
      {/* Inner container  */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
          About Me
        </h2>

        <div className="backdrop-blur-xs bg-transparent border border-gray-700/30 rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div
            className={clsx(
              "relative z-10 text-lg leading-relaxed text-gray-300 space-y-6 transition-all duration-500",
              "max-h-[200px] overflow-hidden md:max-h-none",
              isExpanded && "max-h-[9999px]"
            )}
          >
            {paragraphs.map((content, i) => (
              <p key={i} className="relative group">
                {content}
              </p>
            ))}
          </div>

          <div className="block md:hidden text-center mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
            >
              {isExpanded ? "Show less ↑" : "...Read more ↓"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
