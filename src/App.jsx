import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Header/>
    </>
  )
}

export default App
