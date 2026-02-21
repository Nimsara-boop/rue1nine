import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import NewArrivals from './components/newarrivals'
import PrestigeLine from './components/prestigeline'
import Home from './components/home'
import MenSection from './components/mensection'
import WomenSection from './components/womensection'

function App() {  
  

  return (
    <>
    
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/NewArrivals" element={<NewArrivals/>} />
        <Route path="/PrestigeLine" element={<PrestigeLine/>} />
        <Route path="/MenSection" element={<MenSection/>}/>
        <Route path="/WomenSection" element={<WomenSection/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
