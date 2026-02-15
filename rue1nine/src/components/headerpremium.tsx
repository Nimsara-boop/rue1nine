import { useState } from 'react'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from "react-router-dom"
 
function HeaderPremium() {
    const [showNext, setShowNext] = useState(false);
    const [hideHead, setHideHead] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${assets.hero1})` }}
            id='Premium'>

            <div className="mt-80 px-4">
                <h1 className='text-9xl font-light text-white'>Prestige Line</h1>
                <p className='text-lg text-white mb-4'>A curated selection built to deliver lasting quality and refined style.</p>
                <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300' 
                    onClick={()=>{
                        navigate("/PrestigeLine");
                    }}>
                    Shop Now
                </button>
            </div>

        </div>
    )
}

export default HeaderPremium