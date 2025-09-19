import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Code2, 
  Mountain, 
  Heart, 
  Coffee, 
  BookOpen,
  Zap,
  Compass,
  Target,
  Lightbulb,
  Globe,
  Terminal
} from 'lucide-react';

function AboutMe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const containerRef = useRef(null);

  // Mouse tracking elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const identities = [
    { icon: Brain, label: "Overthinker Deluxe", color: "text-purple-400" },
    { icon: Code2, label: "Existentialist with Wi-Fi", color: "text-cyan-400" },
    { icon: Mountain, label: "Future Mountain Monk", color: "text-green-400" },
    { icon: BookOpen, label: "Philosophy Enthusiast", color: "text-orange-400" },
    { icon: Terminal, label: "Code Craftsman", color: "text-blue-400" },
    { icon: Heart, label: "Hopeless Romantic", color: "text-pink-400" }
  ];

  const contradictions = [
    { 
      left: "Reads Dostoevsky", 
      right: "Googles JavaScript rate limiters",
      leftIcon: BookOpen,
      rightIcon: Code2
    },
    { 
      left: "Dreams of Himalayan huts", 
      right: "Builds AI assistants",
      leftIcon: Mountain,
      rightIcon: Brain
    },
    { 
      left: "Questions existence", 
      right: "Scrolls MongoDB dashboards",
      leftIcon: Lightbulb,
      rightIcon: Terminal
    },
    { 
      left: "Wants to break the system", 
      right: "Chases Google Summer of Code",
      leftIcon: Target,
      rightIcon: Globe
    }
  ];

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '10%',
            left: '80%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '60%',
            left: '10%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            top: '30%',
            left: '5%',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        
        {/* Hero Section */}
        <section 
          id="section-hero"
          className={`text-center mb-20 transition-all duration-1000 ${
            visibleSections.has('section-hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="relative group">
              <img
                src="/pk.webp"
                alt="Priyanshu - The Contradiction"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto border-4 border-purple-500/30 transition-all duration-500 group-hover:border-purple-400/60 group-hover:scale-105"
              />
              
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-blue-500/20 animate-pulse"></div>
              
              {/* Floating Icons Around Image */}
              {identities.map((identity, index) => {
                const Icon = identity.icon;
                const angle = (index * 60) - 90; // Distribute around circle
                const radius = 140; // Distance from center
                const x = Math.cos(angle * Math.PI / 180) * radius;
                const y = Math.sin(angle * Math.PI / 180) * radius;
                
                return (
                  <div
                    key={identity.label}
                    className={`absolute ${identity.color} transition-all duration-300 hover:scale-125 cursor-pointer group z-10`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationName: 'floatIcon',
                      animationDuration: '3s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <Icon className="w-6 h-6" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {identity.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-300%">
              The Walking Contradiction
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 font-mono">
            Overthinker Deluxe Edition™
          </p>
        </section>

        {/* Identity Grid */}
        <section 
          id="section-identities"
          className={`mb-20 transition-all duration-1000 delay-200 ${
            visibleSections.has('section-identities') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-purple-400">Multiple Identities</span>
            <span className="text-gray-400"> (Because Why Pick One?)</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {identities.map((identity, index) => {
              const Icon = identity.icon;
              return (
                <div
                  key={identity.label}
                  className="group relative p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-current/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${identity.color} transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 mb-4" />
                    <h3 className="font-mono font-semibold text-lg mb-2">{identity.label}</h3>
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-current/5 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contradictions Section */}
        <section 
          id="section-contradictions"
          className={`mb-20 transition-all duration-1000 delay-400 ${
            visibleSections.has('section-contradictions') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center mb-12 font-mono">
            <span className="text-cyan-400">Living Contradictions</span>
          </h2>
          
          <div className="space-y-8">
            {contradictions.map((item, index) => {
              const LeftIcon = item.leftIcon;
              const RightIcon = item.rightIcon;
              
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-gray-900/50 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-purple-500/50 transition-all duration-500"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                      <LeftIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-mono text-lg">{item.left}</span>
                    </div>
                    
                    <div className="relative">
                      <div className="text-gray-500 font-mono text-2xl group-hover:text-cyan-400 transition-colors duration-300">
                        ⟷
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-cyan-300 group-hover:text-cyan-200 transition-colors duration-300">
                      <span className="font-mono text-lg">{item.right}</span>
                      <RightIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* The Rant Section */}
        <section 
          id="section-rant"
          className={`mb-20 transition-all duration-1000 delay-600 ${
            visibleSections.has('section-rant') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <h2 className="text-3xl font-bold mb-8 font-mono text-center">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                The Honest Rant
              </span>
            </h2>
            
            <div className="relative z-10 prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I am the classic <span className="text-purple-400 font-semibold">overthinker deluxe edition</span> — the kind of guy who will read Dostoevsky, rant about Vedanta, and then five minutes later Google "how to implement a rate limiter in JavaScript" like both problems belong in the same category.
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I am a <span className="text-cyan-400 font-semibold">walking contradiction</span>: I want to build an AI assistant that fetches YouTube playlists, while also plotting an escape to the Himalayas to live in a hut with my soulmate who may or may not exist outside my head. I am an <span className="text-blue-400 font-semibold">existentialist with Wi-Fi</span>.
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I'll question life, chaos, death, corruption, and whether happiness is a privilege — but still lose hours scrolling MongoDB Atlas dashboards because <span className="text-orange-400 font-semibold">"recruiters ko orgasm dilwana hai."</span>
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I want to become a hacker, a philosopher, a coder, a sage, a mountain monk, and the guy who flexes Docker containers at the same time. <span className="text-pink-400 font-semibold">Pick one? Nah, boring.</span> I am greedy for every identity, every label, every deep rabbit hole.
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I am also, let's be honest, <span className="text-red-400 font-semibold">seeking genuine connection</span>. I dream about meaningful relationships while simultaneously acknowledging society's shallow, transactional nature. I'm frustrated by people's surface-level interactions and their inability to think beyond the next paycheck, yet here I am slogging in the same system, chasing opportunities like Google Summer of Code, because apparently enlightenment doesn't pay rent.
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed mb-6 hover:text-gray-200 transition-colors duration-300">
                I am the guy who channels emotions constructively, carries responsibility for family's sake, but still wants to break the system, smash barriers, and build an ideal world where my parents finally breathe in peace. <span className="text-green-400 font-semibold">I want my parents' sacrifices to not be wasted</span> — and yes, that motivation drives me harder than any textbook.
              </p>
              
              <p className="text-gray-300 font-mono leading-relaxed hover:text-gray-200 transition-colors duration-300">
                And oh, the cherry: I overcommit to everything. I'll say I'm focusing on Python, then dive into JavaScript, then get distracted by networking, then suddenly I'm back to philosophy because why not? I call it <span className="text-purple-400 font-semibold">"growth,"</span> but really it's <span className="text-cyan-400 font-semibold">organized chaos in a hoodie</span>. I am my own paradox — too complex to fit in simple boxes, too restless to sit still, too idealistic to settle, and too self-aware to fake optimism.
              </p>
            </div>
          </div>
        </section>

        {/* asli Action */}
        <section 
          id="section-cta"
          className={`text-center transition-all duration-1000 delay-800 ${
            visibleSections.has('section-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="group relative p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-gray-700/50 rounded-3xl hover:border-purple-500/50 transition-all duration-500">
            <h3 className="text-2xl font-bold font-mono mb-4 text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
              Still Reading? You're Either Brave or Bored
            </h3>
            <p className="text-gray-400 font-mono mb-6 group-hover:text-gray-300 transition-colors duration-300">
              If this chaos resonates with you, let's connect. I promise more contradictions and fewer solutions.
            </p>
            <div className="flex justify-center gap-4">
              <Coffee className="w-6 h-6 text-yellow-600 animate-bounce" />
              <span className="text-yellow-600 font-mono">Fueled by existential dread and caffeine</span>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes floatIcon {
          0%, 100% { 
            transform: translate(-50%, -50%) translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translate(-50%, -50%) translateY(-10px) rotate(5deg); 
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(var(--x), var(--y)) translateY(0px) rotate(0deg); }
          50% { transform: translate(var(--x), var(--y)) translateY(-10px) rotate(5deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 300%;
          animation: gradient 3s ease infinite;
        }
        
        .bg-300% {
          background-size: 300%;
        }
        
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default AboutMe;