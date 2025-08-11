import Hero from "../components/Hero";
import Skillstrip from "../components/Skillstrip";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden">
      <Hero />
      <Skillstrip />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
