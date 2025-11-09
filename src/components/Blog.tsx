'use client';
import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; 
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  description: string;
  link: string;
  image?: string;
}
const BlogPostCard: React.FC<BlogPostProps> = ({ title, description, link, image }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 10 } },
    hover: { scale: 1.03, boxShadow: "0px 0px 15px rgba(0,255,255,0.3)" },
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-800/40 to-black/40 border border-gray-700/50 rounded-lg p-6 flex flex-col shadow-xl overflow-hidden cursor-pointer group"
    >
      {image && (
        <div className="relative h-40 w-full mb-4 rounded-md overflow-hidden border border-gray-600">
          <Image src={image} alt={`${title} image`} layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <div className="flex items-center gap-2 text-cyan-400 group-hover:text-cyan-200 transition-colors">
        Read Article <ExternalLink className="w-4 h-4" />
      </div>
    </motion.a>
  );
};

const Blog: React.FC = () => {
  const blogPostsData: BlogPostProps[] = [
    {
      title: 'How to Use Death to Design a Life Worth Living?',
      description: 'You’re going to die. So what’s worth doing before you do? Most people plan their bucket list for ‘someday.’ What if death makes someday now?',
      link: 'https://medium.com/@yansh08/how-to-use-death-to-design-a-life-worth-living-9bf212919f16',
      image: '/poster1.webp', 
    },
    {
      title: 'The Burden of Awareness: Dostoevsky on Intelligence and Happiness',
      description: 'Sometimes I think about how easily we used to be happy as children. But as our understanding and intelligence grew...',
      link: 'https://medium.com/@yansh08/the-burden-of-awareness-dostoevsky-on-intelligence-and-happiness-3a9d9e6f3b02',
      image: '/poster2.webp', 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="blog" // Important for sidebar navigation
      className="relative z-10 py-20 px-4 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl font-bold text-white text-center mb-12"
        variants={itemVariants}
      >
        Blogs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogPostsData.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>

      <motion.div variants={itemVariants} className="text-center mt-12">
        <a
          href="https://medium.com/@yansh08" // Link to your main Medium profile
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition-colors text-lg"
        >
          View all blogs <span className="text-xl">→</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Blog;