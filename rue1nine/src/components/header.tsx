import React from 'react'
import {assets} from '../assets/assets'


function Header() {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden" 
        style={{backgroundImage: `url(${assets.hero1})`}} 
        id='Header'>
   
    </div>
  )
}

export default Header