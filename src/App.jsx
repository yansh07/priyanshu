import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Links from './pages/Links';

function App() {
  return (
    <div>
      <hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </div>
  );
}

export default App;
