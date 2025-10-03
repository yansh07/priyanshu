// import Image from "next/image";
import BlogSection from "@/components/Blogs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects";
import SkillsMatrix from "@/components/Skills";
import ClickSpark from "@/components/ClickSpark";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-x-hidden w-full">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Your content here */}
        <Navbar />
        <Hero />
        <Project />
        <SkillsMatrix />
        <BlogSection />
        <Footer />
      </ClickSpark>
    </div>
  );
}
