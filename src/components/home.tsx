import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import Carousel from './carousel.tsx'

function Home() {
    const navigate = useNavigate();
    const [isWHovered, setIsWHovered] = useState(false);
    const [isMHovered, setIsMHovered] = useState(false);

    return (
        <div>
            {/*    HEADER   */}

            <div className="min-h-screen bg-scroll md:bg-fixed bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden"
                style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                id='Header'>
                <div className='pt-28 md:pt-40 px-4'>
                    <Carousel />
                </div>
                <div className="flex flex-col md:flex-row w-full px-4 sm:px-6 md:px-8 gap-4 md:gap-8 pb-8 overflow-hidden items-center justify-center">
                    <motion.div
                        initial={{ y: '-100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="w-full md:w-1/2 h-[42vh] sm:h-[55vh] md:h-screen relative group cursor-pointer overflow-hidden"
                        onClick={() => {
                            navigate(`/WomenSection`);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        onMouseEnter={() => setIsWHovered(true)}
                        onMouseLeave={() => setIsWHovered(false)}
                    >
                        <img
                            src={isWHovered ? assets.women2 : assets.WomenSection}
                            className="w-full h-full object-cover transition-all duration-3000"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white tracking-widest text-3xl sm:text-4xl md:text-6xl font-light opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                                Women's Selection
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: '100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        className="w-full md:w-1/2 h-[42vh] sm:h-[55vh] md:h-screen relative group cursor-pointer overflow-hidden"
                        onClick={() => {
                            navigate(`/MenSection`);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        onMouseEnter={() => setIsMHovered(true)}
                        onMouseLeave={() => setIsMHovered(false)}
                    >
                        <img
                            src={isMHovered ? assets.mens2 : assets.MenSection}
                            className="w-full h-full object-cover transition-all duration-500"
                        />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-white tracking-widest text-3xl sm:text-4xl md:text-6xl font-light opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center px-4">
                                Men's Selection
                            </p>
                        </div>
                    </motion.div>

                </div>



                {/*    New Arrivals  */}

                <div className="bg-cover bg-center cursor-pointer mb-8 w-full md:w-3/4 overflow-hidden min-h-[62vh] md:min-h-[80vh] flex items-end"
                    style={{ backgroundImage: `url(${assets.tt2w})` }}
                    id='NewArrivals'
                    onClick={() => {
                        navigate(`/NewArrivals`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                    <div className="w-full px-4 sm:px-6 md:px-10 py-6 md:py-10">
                        <h1 className='text-5xl sm:text-6xl md:text-9xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)] font-light text-white'>New Arrivals</h1>
                        <p className='max-w-2xl text-sm sm:text-base md:text-lg text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)] mb-4'>Discover the latest additions to our collection. Shop now and stay ahead of the trends with our new arrivals.</p>
                        <button className='bg-black text-white text-xl font-extrabold tracking-wider px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300'
                            onClick={() => {
                                navigate(`/NewArrivals`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}>
                            Shop Now
                        </button>
                    </div>

                </div>

                {/*    Prestige Line    

                <div className="min-h-[70vh] md:min-h-screen bg-cover bg-center w-full overflow-hidden hover:cursor-pointer bg-scroll md:bg-center"
                    style={{ backgroundImage: `url(${assets.prestige})` }}
                    id='Premium'
                    onClick={() => {
                        navigate(`/PrestigeLine`);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>

                    <div className="min-h-[70vh] md:min-h-screen flex flex-col justify-end px-4 sm:px-6 md:px-10 pb-8 md:pb-12">
                        <h1 className='text-5xl sm:text-6xl md:text-9xl [text-shadow:2px_2px_8px_rgba(0,0,0,0.7)]  font-light text-white'>Prestige Line</h1>
                        <p className='max-w-2xl text-sm sm:text-base md:text-lg text-white mb-4'>A curated selection built to deliver lasting quality and refined style.</p>
                        <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300'
                        >
                            Shop Now
                        </button>
                    </div>

                </div>*/}

            </div>
        </div>

    )
}

export default Home