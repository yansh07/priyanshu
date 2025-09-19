// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { 
  ArrowUp, 
  Heart, 
  Code, 
  Coffee,
  ExternalLink,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';

const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>{children}</a>
);

function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/yansh07',
      icon: 'fa-brands fa-github text-gray-300',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-800',
      description: 'Check out my repositories'
    },
    { 
      name: 'Email', 
      url: 'mailto:pksingh69313@gmail.com',
      icon: 'fa-solid fa-envelope text-gray-300',
      color: 'hover:text-red-400',
      bgColor: 'hover:bg-red-900/20',
      description: 'Let\'s connect via email'
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/yansh_08',
      icon: 'fa-brands fa-square-x-twitter text-gray-300',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/20',
      description: 'Follow my thoughts'
    },
    { 
      name: 'Medium', 
      url: 'https://yansh08.medium.com',
      icon: 'fa-brands fa-medium text-gray-300',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-900/20',
      description: 'Read my articles'
    }
  ];

  const quickLinks = [
    { name: 'Resume', url: '/resume.pdf', external: true },
    { name: 'Projects', url: '/project', external: false },
    { name: 'Medium', url: 'https://yansh08.medium.com', external: true },
    { name: 'Contact', url: 'mailto:pksingh69313@gmail.com', external: true },
    { name: 'About me', url: '/aboutme', external: true}
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit'
    });
  };

  return (
    <footer className="relative w-full max-w-6xl mx-auto mt-20">
      
      {/* Divider */}
      <div className="relative h-[1px] w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent my-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blue-500/50 to-transparent animate-pulse"></div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 md:px-8 lg:px-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          
          {/* description */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
              <img 
                src="/pk.webp" 
                alt="Priyanshu" 
                className="w-12 h-12 rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <h3 className="text-2xl font-bold text-white font-mono group-hover:text-blue-400 transition-colors duration-300">
                Priyanshu
              </h3>
            </div>
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              BCA 2nd year student passionate about creating digital experiences. 
              <span className="text-blue-400"> Always learning, always coding.</span>
            </p>
            
            {/* Location & Time */}
            <div className="space-y-2 text-xs text-gray-500">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-3 h-3" />
                <span>Dehradun, India</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-3 h-3" />
                <span>Local time: {formatTime(currentTime)}</span>
              </div>
            </div>
          </div>

          {/* social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6 font-mono">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.name}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="animate-fadeInUp"
                >
                  {link.external ? (
                    <a 
                      href={link.url}
                      target={link.url.startsWith('http') ? '_blank' : '_self'}
                      rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group inline-flex items-center gap-2 text-gray-300 hover:text-white font-mono transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 group-hover:bg-white transition-all duration-300"></span>
                      {link.name}
                      {link.url.startsWith('http') && <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                    </a>
                  ) : (
                    <Link 
                      to={link.url}
                      className="group inline-flex items-center gap-2 text-gray-300 hover:text-white font-mono transition-all duration-300 hover:translate-x-2"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 group-hover:bg-white transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-6 font-mono">Connect</h4>
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto md:mx-0">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110 hover:border-current/50 ${social.color} ${social.bgColor}`}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <i className={`${social.icon} text-2xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12`}></i>
                    <span className="text-xs font-mono text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      {social.name}
                    </span>
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredSocial === social.name && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap animate-fadeIn">
                      {social.description}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                    </div>
                  )}
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 rounded-xl bg-current/10 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 pt-8 pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <div className="text-center sm:text-left">
              <p className="text-gray-400 font-mono text-sm mb-2">
                Priyanshu © 2025. All rights reserved.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using</span>
                <i className="fa-brands fa-react text-cyan-400 text-lg animate-spin-slow"></i>
                <span>&</span>
                <Code className="w-4 h-4 text-purple-400" />
                <span>& lots of</span>
                <Coffee className="w-4 h-4 text-yellow-600" />
              </div>
            </div>

            {/* to top button */}
            <button
              onClick={scrollToTop}
              className="group relative p-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-full hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Back to top
              </div>
            </button>
          </div>
        </div>

        {/* Hidden Message */}
        <div className="text-center py-4 border-t border-gray-800/50">
          <p className="text-xs text-gray-600 font-mono hover:text-blue-400 transition-colors duration-500 cursor-default">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce opacity-30"></div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
export default Footer