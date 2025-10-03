// import Image from "next/image";
import BlogSection from "@/components/Blogs";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import SkillsMatrix from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <Project />
      <SkillsMatrix />
      <BlogSection />
    </div>
  );
}
