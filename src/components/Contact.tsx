"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SiGithub, SiGmail, SiMedium } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { PiCoffeeBold } from "react-icons/pi";

interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
  description?: string;
  gradientColors: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  Icon,
  label,
  description,
  gradientColors,
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800/30 to-black/30 border border-gray-700/40 rounded-lg 
               hover:border-cyan-500 transition-colors duration-200 shadow-lg group relative overflow-hidden backdrop-blur-md"
    whileHover={{ y: -5, boxShadow: "0px 0px 15px rgba(0,255,255,0.4)" }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors duration-200" />
    <p className="mt-3 text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
      {label}
    </p>
    {description && (
      <p className="text-xs text-gray-500 mt-1 text-center">{description}</p>
    )}
    <div
      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${gradientColors}`}
    />
  </motion.a>
);

const Contact: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 50,
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-24 px-4"
      style={{
        backgroundImage: "url('/contact.webp')",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 🔮 Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🌌 Inner Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        {/* 🧊 Glass container */}
        <div className="bg-gradient-to-br from-gray-800/30 to-black/30 border border-gray-700/40 rounded-lg p-8 md:p-12 shadow-2xl relative backdrop-blur-md">
          {/* 🌈 Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <SocialLink
              href="https://twitter.com/yansh_08/"
              Icon={FaTwitter}
              label="Twitter/X"
              gradientColors="bg-gradient-to-br from-blue-400 to-cyan-500"
            />
            <SocialLink
              href="https://github.com/yansh07/"
              Icon={SiGithub}
              label="GitHub"
              gradientColors="bg-gradient-to-br from-gray-500 to-gray-700"
            />
            <SocialLink
              href="mailto:pksingh69313@gmail.com"
              Icon={SiGmail}
              label="Email"
              gradientColors="bg-gradient-to-br from-red-500 to-orange-400"
            />
            <SocialLink
              href="https://medium.com/@yansh08"
              Icon={SiMedium}
              label="Medium"
              gradientColors="bg-gradient-to-br from-emerald-500 to-green-600"
            />
          </div>

          {/* 📍 Location + Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300 text-lg mt-8"
          >
            <MapPin className="w-6 h-6 text-cyan-400" />
            <p className="font-semibold">
              Based in{" "}
              <span className="text-white">Dehradun, Uttarakhand</span>
            </p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-2">
              DMs are open{" "}
              <PiCoffeeBold className="w-5 h-5 text-yellow-400" /> Coffee chats
              welcome
            </p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b0d16] to-transparent"></div>
    </motion.section>
  );
};

export default Contact;
