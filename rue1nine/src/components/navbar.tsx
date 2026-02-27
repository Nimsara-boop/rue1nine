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
            <div className="w-full flex justify-between items-center px-6 md:px-20 lg:px-32 bg-white/20 backdrop-blur-md shadow-md py-8">
                <ul className="hidden md:flex gap-7">
                    <img src={assets.logo_light} alt="Logo" className="w-32"
                        onClick={() => {
                            navigate("/");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    />
                </ul>

                <ul className='gap-5 flex font-light text-lg tracking-widest'>
                    <a href="#ruesWorld"
                        className="cursor-pointer text-black px-4  hover:scale-110"
                        onClick={() => {
                            navigate("/RuesWorld");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Rue's World
                    </a>

                    <a href="#Header"
                        className="cursor-pointer text-black px-4 hover:scale-110"
                        onClick={() => {
                            navigate("/home");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        Menu
                    </a>
                    <a href="#Men"
                        className="cursor-pointer text-black px-4  hover:scale-110"
                        onClick={() => {
                            navigate("/MenSection");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Men
                    </a>
                    <a href="#Women"
                        className="cursor-pointer text-black px-4  hover:scale-110"
                        onClick={() => {
                            navigate("/WomenSection");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}>
                        Women
                    </a>


                </ul>
                {/*<button><img src={assets.cart} alt="cart" className="hidden md:block ml-10 px-8  w-24 h-8" /></button>*/}
            </div>
        </motion.div>
    )
}

export default Navbar