'use client';

import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightFromLine } from 'lucide-react';
import { SiMedium } from "react-icons/si";

interface Blog {
  id: number;
  title: string;
  description: string;
  liveUrl: string;
}

const blogData: Blog[] = [
  {
    id: 1,
    title: "Poverty is Profitable",
    description:
      "Poverty isn’t a tragedy — it’s a strategy. A well-oiled machine that feeds the rich, keeps the poor obedient, and runs on one powerful illusion: hope.",
    liveUrl: "https://medium.com/@yansh08/poverty-is-profitable-3b3de49f0695",
  },
  {
    id: 2,
    title: "The Burden of Awareness: Dostoevsky on Intelligence and Happiness",
    description:
      "Sometimes I think about how easily we used to be happy as children. But as our understanding and intelligence grew, that natural flow of laughter diminished.",
    liveUrl: "https://yansh08.medium.com/the-burden-of-awareness-dostoevsky-on-intelligence-and-happiness-0549a2420a33",
  },
  {
    id: 3,
    title: "Friday",
    description:
      "A magical way to shorten your long url, into a small, portable piece of line.",
    liveUrl: "https://shortleepro.vercel.app/",
  },
];

function Blog({ showAll = false }: { showAll?: boolean }) {
    const displayedBlog = showAll ? blogData : blogData.slice(0, 2)
  return (
    <div className='py-4 px-6 max-w-lg grid md:px-0 overflow-hidden w-full'>
        <div>
            <h1 className='dark:text-white font-mono font-bold text-xl md:text-3xl mb-8'>Blog</h1>
        </div>
        {/* Projects Grid */}
        <div className="space-y-6">
          {displayedBlog.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Animated border gradient */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    "linear-gradient(to right, #ec4899, #3b82f6, #8b5cf6)",
                    "linear-gradient(to right, #8b5cf6, #ec4899, #3b82f6)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Card content */}
              <div className="backdrop-blur-3xl relative border-2 border-dashed dark:border-gray-700 border-gray-300 bg-white dark:bg-[#060000] p-5 rounded-lg hover:border-solid hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
                <div className="font-mono">
                  {/* Title with icon */}
                  <motion.h1
                    className="font-bold text-xl mb-3 dark:text-gray-300 text-gray-800 flex gap-3 items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {blog.title}
                  </motion.h1>

                  {/* Description */}
                  <p className="leading-relaxed dark:text-gray-400 text-gray-600 text-sm mb-4">
                    {blog.description}
                  </p>

                  {/* Links */}
                  <div className="grid grid-cols-2 gap-3 font-light">
                    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={blog.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center text-sm dark:text-gray-300 text-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                          }}
                        >
                          <ArrowRightFromLine className="w-4 h-4" />
                        </motion.div>
                        <span className="group-hover/link:underline underline-offset-2">
                          <SiMedium className='text-xl' />
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {!showAll && blogData.length > 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Link
              href="https://medium.com/@yansh08"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium dark:text-blue-400 text-blue-600 hover:underline underline-offset-4 group"
            >
              <span>View more blogs</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <ArrowRightFromLine className="w-4 h-4" />
              </motion.div>
            </Link>
          </motion.div>
        )}
    </div>
  )
}

export default Blog