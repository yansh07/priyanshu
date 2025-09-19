import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="relative mt-0 md:-mt-46 md:px-2 lg:px-12 xl:px-36 lg:-mt-44 xl:-mt-64">
      <div>
        <h1
          className="font-mono bg-gradient-to-r from-blue-100 to-blue-300
                  bg-clip-text text-transparent text-4xl xl:text-5xl px-4 font-bold mt-8 xl:-mt-2"
        >
          My M
          <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
            usings
          </span>
        </h1>
      </div>
      <p className="font-mono px-4 mt-2">
        <span className="text-red-400 font-semibold">Disclaimer:</span>
        <span className="text-gray-400">
          {" "}
          A peek into my curiosity-driven explorations beyond the world of code.
        </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <BlogCard
          thumbnail="/poster3.webp"
          title="Convenient Morality: The Hypocrisy We All Carry."
          description="Nearly everyone is rational and open-minded towards all but one...."
          link="https://medium.com/@yansh08/convenient-morality-the-hypocrisy-we-all-carry-041e98adfa35"
        />
        <BlogCard
          thumbnail="/poster1.webp"
          title="How to Use Death to Design a Life Worth Living?"
          description="You’re going to die. So what’s worth doing before you do?...."
          link="https://yansh08.medium.com/how-to-use-death-to-design-a-life-worth-living-9bf212919f16"
        />
        <BlogCard
          thumbnail="/poster2.webp"
          title="Late marriages, Zero figures, and a Fertility Crisis."
          description="Motherhood at Risk: What No One Tells You About Lifestyle, Age, and Fertility...."
          link="https://medium.com/@yansh08/late-marriages-zero-figures-and-a-fertility-crisis-3437c078616e"
        />
      </div>
    </div>
  );
};

export default Blog;
