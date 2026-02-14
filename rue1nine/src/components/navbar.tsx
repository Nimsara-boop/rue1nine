import React from 'react'
import {assets} from '../assets/assets'

function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto  flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-white ">
            <ul className="hidden md:flex gap-7">
                <img src={assets.logo_light} alt="Logo" className="w-32" /></ul>
            <ul className='gap-5 flex'>
                <a href="#Header" 
                className="cursor-pointer text-black hover:text-white hover:bg-black hover:rounded-xl px-4 hover:text-lg transition-all duration-300 ease-in-out hover:scale-110"> 
                    Home
                </a>
                <a href="#Men"
                 className="cursor-pointer text-black hover:text-white hover:bg-black hover:rounded-xl px-4 hover:text-lg transition-all duration-300 ease-in-out hover:scale-110">
                    Men
                </a>
                <a href="#Women" 
                className="cursor-pointer text-black hover:text-white hover:bg-black hover:rounded-xl px-4 hover:text-lg transition-all duration-300 ease-in-out hover:scale-110">
                    Women
                </a>
                <a href="#Kids" 
                className="cursor-pointer text-black hover:text-white hover:bg-black hover:rounded-xl px-4 hover:text-lg transition-all duration-300 ease-in-out hover:scale-110">
                    Kids
                </a>
                <a href="#Accessories" 
                className="cursor-pointer text-black hover:text-white hover:bg-black hover:rounded-xl px-4 hover:text-lg transition-all duration-300 ease-in-out hover:scale-110">
                    Accessories
                </a>
            </ul>
            <button><img src={assets.profile} alt="Profile" className="hidden md:block ml-10 px-8  w-24 h-24"/></button>
        </div>
    </div>
  )
}

export default Navbar