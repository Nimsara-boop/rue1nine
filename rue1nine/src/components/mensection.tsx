import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { tshirtData } from '../assets/assets'

function MenSection() {
  const navigate = useNavigate()

  return (
    <div id='MenSection' className="flex flex-col items-center justify-center overflow-clip pl-4 bg-[#b0b3af]"
    style={{ backgroundImage: `url(${assets.turtlehead})` }}>
      <div className='mt-23 py-8 px-4 font-light'>Filters</div>
      <div className="grid grid-cols-3 mx-4 items-center justify-center w-full">
        {tshirtData.map((item) => (
          <div key={item.id}
            className="w-4/5 h-full mb-4 border-1 border-gray-500  bg-[#ADB5AB] "
            onClick={() => {
              if (item.id === 3) {
                navigate("/PrestigeLine");
              } else {
                navigate(`/product/${item.id}`);
              }

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}

          >
            <div className="relative mt-10 w-full h-100 overflow-hidden group">
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
            <h2 className="text-xl px-4 font-light text-black">{item.name}</h2>
            <p className="text-xl px-4 font-bold text-black">{item.price}</p>
          </div>
        ))}
      </div>
      <div className='text-white mt-12 text-4xl font-light mb-8'>- End of Collection -</div>

    </div>
  )
}

export default MenSection