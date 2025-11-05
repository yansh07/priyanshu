import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Buttons from "@/components/Buttons";
import TechLogo from "@/components/TechLogo";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="justify-items-center absolute inset-0 min-h-screen overflow-x-hidden w-full transition-colors duration-700 
                bg-[linear-gradient(to_top,_#dbeafe,_#e0f2fe,_#f0f9ff)]
                dark:bg-[radial-gradient(ellipse_at_top,_#003566_0%,_#060000_70%)]"
    >
      <Navbar />
      <Hero />
      <Buttons />
      <About />
      <TechLogo />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
