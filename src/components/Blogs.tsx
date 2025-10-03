import React from 'react';
import Image from 'next/image';

type Blog = {
  image: string; // IMPORTANT: Path must be relative to the `public` folder
  title: string;
  description: string;
  link: string; // The full URL to your Medium article
};

// Step 2: THIS IS YOUR EDITING AREA.
// Just update this array with your 4 latest blogs.
// Place your images in the `public/blog/` directory.
const blogData: Blog[] = [
  {
    image: '/poster1.webp',
    title: 'How I Built a Killer Portfolio with Next.js',
    description: 'A deep dive into the tech stack, design choices, and the subtle animations that make a big difference. From zero to a deployed app on Vercel.',
    link: 'https://medium.com/@yourusername/your-article-link-1',
  },
  {
    image: '/poster2.webp', 
    title: 'Mastering Tailwind CSS for a Futuristic UI',
    description: 'Stop writing messy CSS. Learn how utility-first CSS and a dark-mode-first approach can drastically speed up your development workflow.',
    link: 'https://medium.com/@yourusername/your-article-link-2',
  },
  {
    image: '/poster3.webp', 
    title: 'Why TypeScript is a Must-Have Skill in 2025',
    description: 'Moving from JavaScript to TypeScript felt like getting superpowers. Here’s why you should make the switch for more robust and scalable applications.',
    link: 'https://medium.com/@yourusername/your-article-link-3',
  },
  {
    image: '/poster4.webp',
    title: 'The Hidden Power of React Hooks & State Management',
    description: 'useState and useEffect are just the beginning. Let\'s explore custom hooks and simple state management techniques without reaching for Redux.',
    link: 'https://medium.com/@yourusername/your-article-link-4',
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
          className="object-cover transform-gpu transition-transform duration-300 ease-in-out
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
                       bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-2 text-start">
        My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Musings</span>
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