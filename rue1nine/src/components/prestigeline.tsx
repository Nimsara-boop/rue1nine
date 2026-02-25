import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


function PrestigeLine() {
  return (
    <div>
      <div className=" min-h-screen bg-cover bg-fixed bg-center w-full overflow-hidden"
        id='NewArrivals'
        style={{backgroundImage: `url(${assets.hero_prestige})` }}>
        
        {/* Optional Dark Overlay
        <div className="absolute inset-0 bg-black/20"></div>*/} 

        {/* Content */}
        <div className=" relative backdrop-blur flex flex-col items-center justify-center min-h-screen">
          <img src={assets.logo_dark} className="w-1/5"/>
          <h1 className="text-gray-200 font-light text-8xl">The Prestige Line</h1>
        </div>

        <div className="flex flex-row pt-4 backdrop-blur bg-white/20 ">
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