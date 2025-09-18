import React from "react";

const BlogCard = ({ thumbnail, title, description, link }) => {
  return (
    <div className="max-w-sm bg-black/20 backdrop-blur-2xl border border-gray-700 rounded-lg hover:rotate-z-10 hover:duration-300  transition">
      {/* Thumbnail */}
      <div className="w-full aspect-video overflow-hidden rounded-t-lg">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-300 font-mono">{title}</h3>
        <p className="text-sm text-gray-300 font-mono mb-4 line-clamp-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium font-mono text-white bg-blue-950 rounded-md hover:bg-[#060000]"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
