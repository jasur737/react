import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Header from './components/header'
import Delicious from './components/delicious'
import Swiper from './components/Swiper'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Header/>
     <Delicious/>
     <Products/>
     <Swiper/>
    </>
  )
}

export default App
