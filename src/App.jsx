import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Links from './pages/Links';
// import { motion } from 'framer-motion';

function App() {
  return (
    <div>
      <Navbar />
      <hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
