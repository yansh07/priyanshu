// import { body } from 'framer-motion/client';
// import ThemeToggle from "../components/Darkmode";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="min-h-screen bg-[#1e1a1a]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home;
