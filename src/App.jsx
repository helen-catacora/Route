import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Span from './componentes/Span'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Span />}></Route>
    </Routes>
     
    </>
  )
}

export default App
