'use client';
import React from 'react';
import Image from 'next/image';

type Blog = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const blogData: Blog[] = [
  {
    image: '/poster1.webp',
    title: 'How to Use Death to Design a Life Worth Living?',
    description: 'You’re going to die. So what’s worth doing before you do? Most people plan their bucket list for ‘someday.’ What if death makes someday now?',
    link: 'https://yansh08.medium.com/how-to-use-death-to-design-a-life-worth-living-9bf212919f16',
  },
  {
    image: '/poster2.webp', 
    title: 'The Burden of Awareness: Dostoevsky on Intelligence and Happiness',
    description: 'Sometimes I think about how easily we used to be happy as children. A small chocolate bar or a game of cricket with friends would bring endless laughter.',
    link: 'https://yansh08.medium.com/the-burden-of-awareness-dostoevsky-on-intelligence-and-happiness-0549a2420a33',
  },
  {
    image: '/poster3.webp', 
    title: 'Convenient Morality: The Hypocrisy We All Carry',
    description: 'There are approximately 10,000 distinct religions practiced around the world, and nearly everyone is rational and open-minded towards all but one.',
    link: 'https://yansh08.medium.com/convenient-morality-the-hypocrisy-we-all-carry-041e98adfa35',
  },
  {
    image: '/poster4.webp',
    title: 'Pheromone: The Real Pervert (Backed by Biology)',
    description: 'You’re on a bus. A scent drifts in. And suddenly, your brain has left the programming world and is busy running a whole romantic short film without your permission.',
    link: 'https://yansh08.medium.com/pheromone-the-real-pervert-backed-by-biology-905887fe2337',
  },
];

// The Reusable Blog Card Component
const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <a
      href={blog.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden
                 transform-gpu transition-all duration-300 ease-in-out
                 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
    >
      <div className="w-full aspect-video overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={400}
          className="object-cover w-full h-full transform-gpu transition-transform duration-300 ease-in-out
                     group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-200 font-mono transition-colors duration-300
                       group-hover:text-cyan-400">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-400 font-mono mb-4 line-clamp-3">
          {blog.description}
        </p>
        <div
          className="inline-flex items-center font-mono text-sm text-cyan-400 transition-all duration-300"
        >
          <span>Read on Medium</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transform-gpu transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>
    </a>
  );
};


// The Main Blog Section Component
const BlogSection = () => {
  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-8">
      <h1 className="font-mono bg-gradient-to-r from-blue-200 to-blue-400
                       bg-clip-text text-transparent text-4xl sm:text-5xl font-extrabold mb-2 text-start">
        My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-extrabold">Musings</span>
      </h1>
      <div className='mb-10'>
        <span className='font-mono text-red-300'>Disclaimer: <span className='text-gray-300'>A peek into my curiosity-driven explorations beyond the world of code.</span></span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogData.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;