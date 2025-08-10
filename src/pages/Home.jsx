import Hero from "../components/Hero";
import Skillstrip from "../components/Skillstrip";
function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <Skillstrip />
    </div>
  );
}

export default Home;
