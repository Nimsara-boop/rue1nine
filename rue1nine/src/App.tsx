import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import NewArrivals from './components/newarrivals'
import PrestigeLine from './components/prestigeline'
import Home from './components/home'
import MenSection from './components/mensection'
import WomenSection from './components/womensection'
import ProductPage from './components/productpage'

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
        <Route path="/product/:id" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App
