// import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div
      className="justify-items-center absolute inset-0 min-h-screen overflow-x-hidden w-full transition-colors duration-700 
                bg-gradient-to-t from-[#dbeafe] via-[#e0f2fe] to-[#f0f9ff]
                dark:bg-gradient-to-t dark:from-[#060000] dark:via-[#060000] dark:to-[#003566]"
    >
      <Navbar />
      <Hero />
    </div>
  );
}
