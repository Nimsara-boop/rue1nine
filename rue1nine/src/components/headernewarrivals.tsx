import { useState } from 'react'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from "react-router-dom"
 
function HeaderNewArrivals() {
    const [showNext, setShowNext] = useState(false);
    const [hideHead, setHideHead] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
            style={{ backgroundImage: `url(${assets.hero2})` }}
            id='NewArrivals'>

            <div className="mt-80 px-4">
                <h1 className='text-9xl font-light text-white'>New Arrivals</h1>
                <p className='text-lg text-white mb-4'>Discover the latest additions to our collection. Shop now and stay ahead of the trends with our new arrivals.</p>
                <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300' 
                    onClick={()=>{
                        navigate("/NewArrivals");
                    }}>
                    Shop Now
                </button>
            </div>

        </div>
    )
}

export default HeaderNewArrivals