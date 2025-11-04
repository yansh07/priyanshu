"use client";

// import React, { useState } from "react";
import Image from "next/image";
// interface MousePosition {
//   x: number;
//   y: number;
// }
const Hero: React.FC = () => {
  // const [mousePosition, setMousePosition] = useState<MousePosition>({
  //   x: 0,
  //   y: 0,
  // });

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  return (
    <div className="grid w-full items-center justify-items-center">
        <h1 className="flex gap-4 font-mono text-3xl font-bold">
          Hi, I&apos;m
          <Image
            src="/ghibli.webp"
            width={45}
            height={45}
            alt="Picture of the author"
            className="rounded-sm border-2 dark:border-white rotate-350 border-slate-900"
          />
          Priyanshu
        </h1>
    </div>
  );
};

export default Hero;
