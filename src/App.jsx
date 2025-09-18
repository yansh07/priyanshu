import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projectsum from './components/Projectsum'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/project' element={<Projectsum />}></Route>
      </Routes>
    </>
  )
}

export default App
