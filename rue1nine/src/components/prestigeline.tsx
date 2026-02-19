import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


function PrestigeLine() {
  return (
    <div>
      <div className=" min-h-screen bg-cover bg-center w-full overflow-hidden"
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
          <h1 className="text-white font-light text-9xl">The Prestige Line</h1>
        </div>

        <div className="flex flex-row mt-4 ">
          <img src={assets.T2e} className="w-2/3"/>
          <div className=" px-4">
            <h1 className="text-8xl font-thin py-20">Dress Prestige</h1>
            <p>Connect with us to commission your bespoke T-shirt from this exclusive collection. Personalize every detail — from the vehicle of your choice to a curated color palette — and experience craftsmanship of the highest caliber, delivered with impeccable precision and refinement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrestigeLine