import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate();


    return (

        <motion.div
            className="fixed top-0 left-0 w-full z-10"
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <div className="w-full flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center px-4 py-4 md:px-18 lg:px-32 bg-white/20 backdrop-blur-md shadow-md md:py-8">
                <ul className="flex justify-center sm:justify-start">
                    <img src={assets.logo_light} alt="Logo" className="w-32"
                        onClick={() => {
                            navigate("/");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    />
                </ul>

                <ul className='flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-5 font-light text-sm sm:text-base md:text-xl tracking-widest text-center weight-20'>
                    <a href="#ruesWorld"
                        className="cursor-pointer text-black px-2 sm:px-4 hover:scale-110"
                        onClick={() => {
                            navigate("/RuesWorld");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Rue's World
                    </a>

                    <a href="#Header"
                        className="cursor-pointer text-black px-2 sm:px-4 font-weight-20 hover:scale-110 "
                        onClick={() => {
                            navigate("/home");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Menu
                    </a>
                    <a href="#Men"
                        className="cursor-pointer text-black px-2 sm:px-4 hover:scale-110"
                        onClick={() => {
                            navigate("/MenSection");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Men
                    </a>
                    <a href="#Women"
                        className="cursor-pointer text-black px-2 sm:px-4 hover:scale-110"
                        onClick={() => {
                            navigate("/WomenSection");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Women
                    </a>


                </ul>
            </div>
        </motion.div>
    )
}

export default Navbar