import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projectsum from './components/Projectsum'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Projectsum />} />
    </Routes>
  )
}

export default App