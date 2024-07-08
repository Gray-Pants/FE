import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
import { Container } from './ui/container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </Container>
  )
}

export default App
