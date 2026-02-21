import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from "react-router-dom"

function Home() {
    const newarrivalsnavigate = useNavigate();
    const prestigelinenavigate = useNavigate();
    const mensnavigate = useNavigate();

    return (
        <div>
            {/*    HEADER   */}

            <div className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
                style={{ backgroundImage: `url(${assets.hero})` }}
                id='Header'>

                <div className="flex flex-row w-full overflow-hidden items-center justify-center">
                    <motion.a
                        initial={{ y: '100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 5, ease: "easeOut" }}
                        className="text-2xl font-light hover:underline hoer:underline-gray-400 w-1/2 h-screen relative"
                        onClick={() => {
                            mensnavigate("/WomenSection");
                        }}>
                        <div className="w-full h-full bg-center items-center flex justify-center overflow-hidden"
                            style={{ backgroundImage: `url(${assets.WomenSection})` }}>
                            <p className="text-white text-4xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Women's Clothing
                            </p>
                        </div>
                    </motion.a>

                    <motion.a
                        initial={{ y: '-100vw', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 5, ease: "easeOut" }}
                        className="text-2xl font-light hover:underline w-1/2 h-screen relative"
                        onClick={() => {
                            mensnavigate("/MenSection");
                        }}>
                        <div className="w-full h-full bg-center items-center flex justify-center overflow-hidden"
                            style={{ backgroundImage: `url(${assets.MenSection})` }}>
                            <p className="text-white text-4xl font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Men's Clothing
                            </p>
                        </div>
                    </motion.a>

                </div>

            </div>

            {/*    New Arrivals  */}

            <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
                style={{ backgroundImage: `url(${assets.newarrivals})` }}
                id='NewArrivals'>

                <div className="mt-80 px-4">
                    <h1 className='text-9xl font-light text-white'>New Arrivals</h1>
                    <p className='text-lg text-white mb-4'>Discover the latest additions to our collection. Shop now and stay ahead of the trends with our new arrivals.</p>
                    <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300'
                        onClick={() => {
                            newarrivalsnavigate("/NewArrivals");
                        }}>
                        Shop Now
                    </button>
                </div>

            </div>

            {/*    Prestige Line    */}

            <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
                style={{ backgroundImage: `url(${assets.prestige})` }}
                id='Premium'>

                <div className="mt-80 px-4">
                    <h1 className='text-9xl font-light text-white'>Prestige Line</h1>
                    <p className='text-lg text-white mb-4'>A curated selection built to deliver lasting quality and refined style.</p>
                    <button className='bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300'
                        onClick={() => {
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