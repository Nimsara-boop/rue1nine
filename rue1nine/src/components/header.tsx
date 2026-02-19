import React from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion'


function Header() {

  
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden" 
        style={{backgroundImage: `url(${assets.hero})`}} 
        id='Header'>
        
        <motion.a href="#RuesWorld" 
        initial = {{y:'100vw', opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1.5, ease:"easeOut"}}
        className="mt-30 text-red-500 text-2xl font-light hover:underline transition-all duration-2000 ease-in-out">
            Rues' World
        </motion.a>
   
    </div>
  )
}

export default Header