import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Projectsum from './components/Projectsum'
// import { Routes, Route,  } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Home />
          </motion.div>
        } />
        <Route path='/project' element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Projectsum />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default App
