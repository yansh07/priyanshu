import Hero from "../components/Hero";
import Skillstrip from "../components/Skillstrip";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden">
      <Hero />
      <Skillstrip />
      <Skills />
    </div>
  );
}

export default Home;
