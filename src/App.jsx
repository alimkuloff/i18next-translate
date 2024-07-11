import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import SinglePage from './routes/SinglePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SinglePage/:id" element={<SinglePage />} />
      </Routes>
    </>
  )
}

export default App
