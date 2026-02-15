import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import HeaderNewArrivals from './components/headernewarrivals'
import Navbar from './components/navbar'
import NewArrivals from './components/newarrivals'
import HeaderPremium from './components/headerpremium'
import PrestigeLine from './components/prestigeline'

function App() {  
  

  return (
    <>
    <Navbar/>
    
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Header/>
          <HeaderNewArrivals/>
          <HeaderPremium/>
          </>}
          />
        <Route path="/NewArrivals" element={<NewArrivals/>} />
        <Route path="/PrestigeLine" element={<PrestigeLine/>} />

      </Routes>
    </Router>

    </>
  )
}

export default App
