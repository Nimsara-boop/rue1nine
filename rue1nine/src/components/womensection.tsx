import { assets } from '../assets/assets'
import { useNavigate, } from 'react-router-dom'
import { tshirtData } from '../assets/assets'

function WomenSection() {
  const navigate = useNavigate()

  return (
    <div id='WomenSection' className="flex flex-col items-center justify-center overflow-hidden px-3 sm:px-4"
    style={{ backgroundImage: `url(${assets.w5})` }}
    >
      <div className='mt-23 py-8 px-4 font-light self-start'>Filters</div>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-4 overflow-hidden">
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
            <img src={item.images[0]} alt={item.name} className="mt-6 w-full h-72 sm:h-80 md:h-96 object-cover" />
            <h2 className='font-light text-lg sm:text-xl px-4 py-2'>{item.name}</h2>
            <p className='px-4 pb-4'>{item.price}</p>
          </div>
        ))}
      </div>

      <div className='text-white mt-10 text-2xl sm:text-4xl font-light mb-8 text-center'>- End of Collection -</div>

    </div>
  )
}

export default WomenSection