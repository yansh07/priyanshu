'use client';
import React from 'react';
import { motion, Transition } from 'framer-motion';
import { User, Folder, MessageSquare } from 'lucide-react';
import { SiGithub, SiGmail } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';

interface NavItemProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, Icon, label }) => {
  return (
    <motion.a
      href={href}
      className="group relative flex items-center justify-center p-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
      whileHover={{ scale: 1.1, x: 5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
      <span className="absolute left-full ml-4 whitespace-nowrap bg-gray-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
};

const SidebarNavigation: React.FC = () => {
  const sidebarVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        ease: [0.6, -0.05, 0.01, 0.99] as Transition["ease"],
        duration: 0.8, 
        staggerChildren: 0.1 
      } 
    },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 
                 hidden lg:flex flex-col space-y-4 
                 bg-gray-900/40 backdrop-blur-sm rounded-r-lg py-4 border border-l-0 border-gray-700/50 shadow-xl"
    >
      {/* Top Logo / Initial */}
      <motion.div 
        className="mb-6 flex justify-center py-2"
        variants={sidebarVariants}
      >
        <motion.div 
          className="w-10 h-10 bg-cyan-600 flex items-center justify-center rounded-full font-bold text-xl text-white shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/ghibli.webp" alt="priyanshu singh" width={35} height={35} className='rounded-full'/>
        </motion.div>
      </motion.div>

      <NavItem href="/aboutme" Icon={User} label="About" />
      <NavItem href="/projects" Icon={Folder} label="Projects" />
      <NavItem href="#contact" Icon={MessageSquare} label="Contact" />
      <span className='px-2'><ThemeToggle /></span>

      <div className="border-t border-gray-700/50 mx-4 my-2" />

      <NavItem href="https://github.com/yansh07/" Icon={SiGithub} label="GitHub" /> 
      <NavItem href="mailto:pksingh69313@gmail.com" Icon={SiGmail} label="LinkedIn" /> 
      <NavItem href="https://x.com/yansh_08/" Icon={FaTwitter} label="Twitter/X" />

    </motion.div>
  );
};

export default SidebarNavigation;