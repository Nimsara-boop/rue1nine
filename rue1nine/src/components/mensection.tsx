import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { tshirtData } from '../assets/assets'

function MenSection() {
  const navigate = useNavigate()

  return (
    <div id='MenSection' className="flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4 bg-[#b0b3af]"
    style={{ backgroundImage: `url(${assets.turtlehead})` }}>
      <div className='mt-23 py-8 px-4 font-light self-start'>Filters</div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {tshirtData.map((item) => (
          <div key={item.id}
            className="w-full h-full border border-gray-500 bg-[#ADB5AB]"
            onClick={() => {
              if (item.id === 3) {
                navigate("/PrestigeLine");
              } else {
                navigate(`/product/${item.id}`);
              }

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}

          >
            <div className="relative mt-6 w-full h-72 sm:h-80 md:h-96 overflow-hidden group">
            <img
              src={item.images[0]}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            <img
              src={item.hoverimage}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            </div>
            <h2 className="text-lg sm:text-xl px-4 py-2 font-light text-black">{item.name}</h2>
            <p className="text-lg sm:text-xl px-4 pb-4 font-bold text-black">{item.price}</p>
          </div>
        ))}
      </div>
      <div className='text-white mt-10 text-2xl sm:text-4xl font-light mb-8 text-center'>- End of Collection -</div>

    </div>
  )
}

export default MenSection