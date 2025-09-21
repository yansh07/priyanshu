import React from "react";

const BlogCard = ({ thumbnail, title, description, link }) => {
  return (
    
    <div className="group max-w-sm bg-black/20 backdrop-blur-2xl border border-gray-700 rounded-lg 
                   transform transition-all duration-300 ease-in-out
                   hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
      
      <div className="w-full aspect-video overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out
                     group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-gray-300 font-mono transition-colors duration-300
                       group-hover:text-cyan-400">
          {title}
        </h3>
        <p className="text-sm text-gray-400 font-mono mb-6 line-clamp-3">{description}</p>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium font-mono text-white bg-blue-950 rounded-md
                     transform transition-all duration-300 ease-in-out
                     hover:bg-cyan-900/80 hover:scale-105"
        >
          <span>Read More</span>
          <span className="transform transition-transform duration-300 ease-in-out ml-2
                           group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;