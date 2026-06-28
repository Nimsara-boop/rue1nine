import { assets } from '../assets/assets'
import { tshirtData } from '../assets/assets'
import { useNavigate } from "react-router-dom"



function NewArrivals() {

  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center w-full bg-scroll md:bg-fixed overflow-hidden px-3 sm:px-4"
        style={{ backgroundImage: `url(${assets.f_turtle_2})` }}
        id='NewArrivals'>
        <div className='pt-32 sm:pt-40 md:pt-56 pb-6 sm:pb-8 text-center md:text-left md:pl-8 lg:pl-16'>
          <h2 className='text-5xl sm:text-7xl md:text-9xl text-white font-light leading-none'>New</h2>
          <h2 className='text-5xl sm:text-7xl md:text-9xl text-white font-light leading-none'>Arrivals</h2>
        </div>

        <div className="backdrop-blur w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-4 pb-8">
          {tshirtData.map((item) => (
            <div key={item.id}
              className="backdrop-blur w-full h-full border border-gray-500 bg-[#ADB5AB]"
                  onClick={() => {
      if (item.id === 3) {
        navigate("/PrestigeLine");
      } else {
        navigate(`/product/${item.id}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });}}
            >
              <img src={item.images[0]} alt={item.name} className="mt-6 w-full h-72 sm:h-80 md:h-96 object-cover" />
              <h2 className='font-light text-lg sm:text-xl px-4 py-2'>{item.name}</h2>
              <p className='px-4 pb-4'>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default NewArrivals