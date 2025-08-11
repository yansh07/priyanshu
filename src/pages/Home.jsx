import Hero from "../components/Hero";
import Skillstrip from "../components/Skillstrip";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden">
      <Hero />
      <Skillstrip />
      <Skills />
      <Contact />
    </div>
  );
}

export default Home;
