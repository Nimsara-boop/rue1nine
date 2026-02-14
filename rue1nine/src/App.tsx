import { useState } from 'react'

import './App.css'
import Header from './components/header'
import NewArrivals from './components/newarrivals'
import Navbar from './components/navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <Header/>
    <NewArrivals/>
    </>
  )
}

export default App
