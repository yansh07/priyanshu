// import { body } from 'framer-motion/client';
// import ThemeToggle from "../components/Darkmode";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-[#0f0f0f] via-[#1c1c1c] to-[#2b2b2b]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
