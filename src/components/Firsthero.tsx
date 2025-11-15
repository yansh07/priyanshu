"use client";
import React from "react";
import Image from "next/image";

const Firsthero = () => {
  return (
    <div className="m-2">
      {/* BANNER */}
      <div className="relative w-full h-[150px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/heroo.png"
          alt="hero banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* avatar */}
      <div className="relative">
        <div
          className="
            overflow-hidden
            bg-cover bg-no-repeat
            absolute -top-16 left-3 md:left-6 
            w-35 md:w-40 h-35 md:h-40 
            rounded-full p-2 
            border-2 border-neutral-300 dark:border-neutral-700 
            backdrop-blur-3xl cursor-pointer
            transition-all duration-300 ease-out
            hover:scale-105 hover:-rotate-1
            hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]
            dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]
            hover:border-neutral-100 dark:hover:border-neutral-500
          "
        >
          <Image
            src="/leaves.webp"
            alt="leaves bg"
            fill
            className="object-cover rounded-full"
          />

          <div
            className="
              relative z-10
              w-full h-full rounded-full overflow-hidden
              transition-all duration-300
              hover:brightness-110
            "
          >
            <Image
              src="/mememe.webp"
              alt="priyanshu"
              width={300}
              height={300}
              className="
                w-full h-full object-cover object-[50%_20%]
              "
            />
          </div>
        </div>
      </div>

      {/* push content down */}
      <div className="h-20"></div>
    </div>
  );
};

export default Firsthero;
