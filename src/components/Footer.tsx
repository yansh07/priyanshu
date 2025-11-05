'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Coffee, Code } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 md:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Profile Section */}
          <div className="flex items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 animate-pulse" />
              <Image
                src="/ghibli.webp"
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full border-2 border-white dark:border-yellow-400 shadow-lg relative z-10"
              />
            </motion.div>
            
            <div className="text-left">
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
              >
                Priyanshu
              </motion.h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                Backend System Engineer
              </p>
            </div>
          </div>

          {/* Worthy Line with Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-gray-700 dark:text-gray-300"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </motion.div>
            <span className="font-medium">Turning caffeine into code since forever</span>
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent max-w-xs mx-auto"
          />

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-sm italic text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
              &quot;If it&apos;s fixed today, it was a bug. If not, it&apos;s an undocumented feature. 😎&quot;
            </p>
          </motion.div>

          {/* Sarcastic/Funny Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs text-gray-500 dark:text-gray-500 font-mono">
              Built with <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block"
              >
                <Heart className="w-3 h-3 inline text-red-500 fill-red-500" />
              </motion.span> and probably too much coffee ☕
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent max-w-xs mx-auto"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-xs text-gray-500 dark:text-gray-600">
              © {currentYear} Priyanshu. All rights reserved. <br />
              <span className="text-[10px]">No bugs were harmed in the making of this website. 🐛</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;