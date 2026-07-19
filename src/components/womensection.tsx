import { assets } from '../assets/assets'
import { useNavigate, } from 'react-router-dom'
import { tshirtDataWomen } from '../assets/assets'

function WomenSection() {
  const navigate = useNavigate()

  return (
    <div id='WomenSection' className="flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4"
      style={{ backgroundImage: `url(${assets.w5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-60 overflow-hidden">
        {tshirtDataWomen.map((item) => (
          <div key={item.id}
            className="w-full h-full bg-[#000000]/50"
            onClick={() => {
              navigate(`/product/${item.id}`);

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}


          >
            <img src={item.images[0]} alt={item.name} className="w-full h-100 sm:h-80 md:h-100 object-cover" />
            <div className="p-10">
              <img src={assets.logo_dark} alt="Logo" className=" w-16 h-4" />
              <h2 className='font-light text-lg sm:text-xl py-2 text-gray-200'>{item.name}</h2>
              <p className='text-sm text-gray-500 font-semibold'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-white mt-10 text-2xl sm:text-4xl font-light mb-8 text-center'>- End of Collection -</div>

    </div>
  )
}

export default WomenSection