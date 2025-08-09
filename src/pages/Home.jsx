// import { body } from 'framer-motion/client';
import ThemeToggle from "../components/Darkmode";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skillstrip from "../components/Skillstrip";
function Home() {
  return (
    <div className="min-h-screen bg-[#121212] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skillstrip />
    </div>
  );
}

export default Home;
