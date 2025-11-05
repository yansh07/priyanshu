'use client';

import React from "react";
import Link from "next/link";
import { Twitter, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SiMedium, SiGmail, SiGithub } from "react-icons/si";

// Contact links data
const contactLinks = [
  {
    id: "github",
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/yansh07",
    color: "hover:text-white dark:hover:text-white",
    bgColor: "hover:bg-slate-900 dark:hover:bg-emerald-800",
  },
  {
    id: "email",
    name: "Email",
    icon: SiGmail,
    url: "mailto:pksingh69313@gmail.com",
    color: "hover:text-red-600 dark:hover:text-red-400",
    bgColor: "hover:bg-blue-500 dark:hover:bg-orange-700",
  },
  {
    id: "medium",
    name: "Medium",
    icon: SiMedium,
    url: "https://medium.com/@yansh08",
    color: "hover:text-green-600 dark:hover:text-green-400",
    bgColor: "hover:bg-orange-500 dark:hover:bg-blue-950",
  },
];

function Contact() {
  return (
    <div className="backdrop-blur-3xl py-4 relative grid max-w-lg px-6 md:px-0 overflow-hidden w-full">
      <div>
        <h1 className="dark:text-white font-mono font-bold text-xl md:text-3xl mb-8">
          Contact Me
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          {/* Animated glowing border */}
          <motion.div
            className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"
            animate={{
              background: [
                "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
                "linear-gradient(180deg, #ec4899, #8b5cf6, #3b82f6)",
                "linear-gradient(270deg, #8b5cf6, #3b82f6, #ec4899)",
                "linear-gradient(360deg, #3b82f6, #ec4899, #8b5cf6)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />

          {/* Main card */}
          <div className="relative border-2 border-dashed dark:border-gray-700 border-gray-300 bg-white dark:bg-[#060000] p-6 rounded-lg hover:border-solid hover:border-purple-500 dark:hover:border-purple-400 transition-all duration-300">
            <div className="font-mono space-y-6">
              {/* Twitter Section with Tagline */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="space-y-3"
              >
                <Link
                  href="https://x.com/yansh_08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/twitter inline-block"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 group-hover/twitter:bg-blue-500 dark:group-hover/twitter:bg-blue-600 transition-colors"
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover/twitter:text-white transition-colors" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover/twitter:text-blue-600 dark:group-hover/twitter:text-blue-400 transition-colors">
                        Follow me on Twitter/X
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <span className="text-xl group-hover/twitter:scale-110 transition-transform inline-block">
                        →
                      </span>
                    </motion.div>
                  </motion.div>
                </Link>

                {/* Sarcastic Tagline */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-600 dark:text-gray-400 italic pl-14"
                >
                  &quot;Where I tweet like I&apos;m getting paid for it (I&apos;m not) 🐦&quot;
                </motion.p>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
              />

              {/* Other Social Links */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-3"
              >
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <Link
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 ${link.bgColor} transition-all duration-300 text-center`}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="flex justify-center mb-2"
                          >
                            <Icon
                              className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${link.color} transition-colors`}
                            />
                          </motion.div>
                          <p className="text-xs font-medium text-gray-100 dark:text-gray-300">
                            {link.name}
                          </p>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"
              />

              {/* Location */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-300 dark:border-green-800"
                >
                  <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
                </motion.div>
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Based in
                  </p>
                  <motion.p
                    className="text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.05 }}
                  >
                    Dehradun, Uttarakhand 🏔️
                  </motion.p>
                </div>
              </motion.div>

              {/* Fun CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-4"
              >
                <motion.p
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="text-xs text-center text-gray-500 dark:text-gray-500"
                >
                  💬 DMs are open • Coffee chats welcome ☕
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;