import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projectsum from './components/Projectsum'
import AboutMe from './pages/Aboutme'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Projectsum />} />
      <Route path='/aboutme' element={<AboutMe />} />
    </Routes>
  )
}

export default App