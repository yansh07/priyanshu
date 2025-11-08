'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Bug } from 'lucide-react';
import { PiCoffeeBold } from 'react-icons/pi';

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, delay: 0.2 } },
  };

  return (
    <motion.footer
      className="relative z-10 py-10 px-4 max-w-6xl mx-auto text-center text-gray-400 text-sm space-y-4"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="flex items-center gap-2">
          Turning caffeine into code since forever <PiCoffeeBold className="w-4 h-4 text-yellow-500" />
        </p>
        <p className="text-gray-500 italic">
          &quot;If it&apos;s fixed today, it was a bug; if not, it&apos;s an undocumented feature.&quot;
        </p>
      </div>

      <p className="flex items-center justify-center gap-1">
        Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and probably too much coffee <PiCoffeeBold className="w-4 h-4 text-yellow-500" />
      </p>

      <p>
        &copy; {new Date().getFullYear()} Priyanshu. All rights reserved.
      </p>

      <p className="flex items-center justify-center gap-1 text-gray-500">
        No bugs were harmed in the making of this website. <Bug className="w-4 h-4 text-emerald-500" />
      </p>
    </motion.footer>
  );
};

export default Footer;