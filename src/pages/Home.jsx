import Hero from "../components/Hero";
import Skillstrip from "../components/Skillstrip";
function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Skillstrip />
    </div>
  );
}

export default Home;
