import { useState } from 'react'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from "react-router-dom"

import React from 'react'

function Home() {
    const newarrivalsnavigate = useNavigate();
    const prestigelinenavigate = useNavigate();

  return (
    <div>
              {/*    HEADER   */}

        <div className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden" 
            style={{backgroundImage: `url(${assets.hero})`}} 
            id='Header'>

        
            <div className="flex flex-row">
                <motion.a href="#MenSection" 
                initial = {{y:'100vw', opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.5, ease:"easeOut"}}
                className="mt-30 text-red-500 text-2xl font-light hover:underline transition-all duration-2000 ease-in-out">
                    <img src={assets.tshirt1a}/>
                    <p>Men's Clothing</p>
                </motion.a>
        
                <motion.a href="#WomenSection" 
                initial = {{y:'100vw', opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{duration:1.5, ease:"easeOut"}}
                className="mt-30 text-red-500 text-2xl font-light hover:underline transition-all duration-2000 ease-in-out">
                   <img src={assets.tshirt1b}/>
                  <p>Women's Clothing</p>
                </motion.a>
        
                  </div>
            
            <motion.a href="#RuesWorld" 
            initial = {{y:'100vw', opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:1.5, ease:"easeOut"}}
            className="mt-30 text-red-500 text-2xl font-light hover:underline transition-all duration-2000 ease-in-out">
                Rues' World
            </motion.a>
       
        </div>

                {/*    New Arrivals  */}

        <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${assets.hero2})` }}
            id='NewArrivals'>

            <div className="mt-80 px-4">
                <h1 className='text-9xl font-light text-white'>New Arrivals</h1>
                <p className='text-lg text-white mb-4'>Discover the latest additions to our collection. Shop now and stay ahead of the trends with our new arrivals.</p>
                <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300' 
                    onClick={()=>{
                        newarrivalsnavigate("/NewArrivals");
                    }}>
                    Shop Now
                </button>
            </div>

        </div>

                    {/*    Prestige Line    */}

        <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${assets.hero1})` }}
            id='Premium'>

            <div className="mt-80 px-4">
                <h1 className='text-9xl font-light text-white'>Prestige Line</h1>
                <p className='text-lg text-white mb-4'>A curated selection built to deliver lasting quality and refined style.</p>
                <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300' 
                    onClick={()=>{
                        prestigelinenavigate("/PrestigeLine");
                    }}>
                    Shop Now
                </button>
            </div>

        </div>

    </div>

  )
}

export default Home