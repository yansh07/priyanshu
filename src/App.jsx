import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div className="relative">
      {/* Global background cursor effect */}
      <SplashCursor />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
