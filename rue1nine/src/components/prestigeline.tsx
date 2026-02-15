import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


function PrestigeLine() {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
        id='NewArrivals'>
        <video autoPlay loop muted playsInline className="absolute top-32 left-10 w-1/3 h-4/6 object-cover" >
          <source src={assets.T2a} type="video/mp4" />
        </video>
                <video autoPlay loop muted playsInline className="absolute top-32 right-20 w-1/3 h-4/6 object-cover" >
          <source src={assets.T2a} type="video/mp4" />
        </video>
        {/* Optional Dark Overlay*/} 
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <img src={assets.logo_light} className="w-1/5"/>
          <h1 className="text-white font-light text-9xl">Prestige Line</h1>
        </div>

        <div>
          <img src={assets.}/>
        </div>
      </div>
    </div>
  )
}

export default PrestigeLine