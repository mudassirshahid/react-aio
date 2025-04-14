import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import User from './pages/User'
import Layout from './Layout'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='*' element={<NotFound/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
