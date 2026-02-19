import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import HeaderNewArrivals from './components/headernewarrivals'
import Navbar from './components/navbar'
import NewArrivals from './components/newarrivals'
import HeaderPremium from './components/headerpremium'
import PrestigeLine from './components/prestigeline'
import Home from './components/home'

function App() {  
  

  return (
    <>
    
    
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Home/>
          <Navbar/>
          
          </>}
          />
        <Route path="/home" element={<Header/>}/>
        <Route path="/NewArrivals" element={<NewArrivals/>} />
        <Route path="/PrestigeLine" element={<PrestigeLine/>} />

      </Routes>
    </Router>

    </>
  )
}

export default App
