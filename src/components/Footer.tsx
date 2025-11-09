"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Bug } from "lucide-react";
import { PiCoffeeBold } from "react-icons/pi";

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, delay: 0.2 },
    },
  };

  return (
    <motion.footer
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 px-4 text-center text-gray-400 text-sm"
      style={{
        backgroundImage: "url('/footer.webp')",
      }}
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 🔮 dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* 🌈 fade transition at top */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0b0d16] to-transparent"></div>

      {/* 💎 footer content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-5 backdrop-blur-xs bg-gradient-to-br from-gray-800/20 to-black/20 border border-gray-700/30 rounded-xl p-8 shadow-xl">
        <p className="flex items-center gap-2 text-gray-300 text-base md:text-lg">
          Turning caffeine into code since forever{" "}
          <PiCoffeeBold className="w-4 h-4 text-yellow-500" />
        </p>

        <p className="text-gray-400 italic text-sm md:text-base">
          &quot;If it&apos;s fixed today, it was a bug; if not, it&apos;s an
          undocumented feature.&quot;
        </p>

        <p className="flex items-center justify-center gap-1 text-gray-300 text-base">
          Built with{" "}
          <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and probably
          too much coffee <PiCoffeeBold className="w-4 h-4 text-yellow-500" />
        </p>

        <p className="text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Priyanshu</span>. All rights
          reserved.
        </p>

        <p className="flex items-center justify-center gap-1 text-gray-500 text-sm">
          No bugs were harmed in the making of this website.{" "}
          <Bug className="w-4 h-4 text-emerald-500" />
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
