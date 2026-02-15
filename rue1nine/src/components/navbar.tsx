import React from 'react'
import { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(()=>{
    const handleScroll = () => {
      const header = document.getElementById("Header")
      if (!header) return

      const headerBottom = header.offsetHeight
      setShowNavbar(window.scrollY > headerBottom)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    
    <motion.div 
    className={`fixed top-0 left-0 w-full z-10 ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
    initial={{ y: '-100%', opacity: 0 }}
    animate={{ y: showNavbar ? '0%' : '-100%', opacity: showNavbar ? 1 : 0 }}
    transition={{ duration: 0.3 }}
    >
        <div className="container mx-auto  flex justify-between items-center px-6 md:px-20 lg:px-32 bg-white/30 backdrop-blur-md shadow-md">
            <ul className="hidden md:flex gap-7">
                <img src={assets.logo_light} alt="Logo" className="w-32" /></ul>
            <ul className='gap-5 flex'>
                <a href="#Header" 
                className="cursor-pointer text-black px-4   hover:scale-110"> 
                    Home
                </a>
                <a href="#Men"
                 className="cursor-pointer text-black px-4  hover:scale-110">
                    Men
                </a>
                <a href="#Women" 
                className="cursor-pointer text-black px-4  hover:scale-110">
                    Women
                </a>
                <a href="#Kids" 
                className="cursor-pointer text-black px-4  hover:scale-110">
                    Kids
                </a>
                <a href="#Accessories" 
                className="cursor-pointer text-black px-4  hover:scale-110">
                    Accessories
                </a>
            </ul>
            <button><img src={assets.profile} alt="Profile" className="hidden md:block ml-10 px-8  w-24 h-24"/></button>
        </div>
    </motion.div>
  )
}

export default Navbar