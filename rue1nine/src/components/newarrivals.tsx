import { assets } from '../assets/assets'
import { tshirtData } from '../assets/assets'
import { useNavigate } from "react-router-dom"



function NewArrivals() {

  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center w-full bg-fixed overflow-hidden "
        style={{ backgroundImage: `url(${assets.f_turtle_2})` }}
        id='NewArrivals'>
        <div className='mt-80 ml-210'>
          <h2 className='text-9xl text-white font-light'>New </h2>
          <h2 className='text-9xl text-white font-light'>Arrivals </h2>
        </div>

        <div className="backdrop-blur sm:flex sm:flex-col md:grid md:grid-cols-3 px-4 items-center justify-center w-full py-4 ml-4 ">
          {tshirtData.map((item) => (
            <div key={item.id}
              className=" backdrop-blur px-4 sm:w-1/2 lg:w-4/5 h-full mb-4 border-1 border-gray-500 bg-[#ADB5AB] "
                  onClick={() => {
      if (item.id === 3) {
        navigate("/PrestigeLine");
      } else {
        navigate(`/product/${item.id}`);
      }
      window.scrollTo({ top: 0, behavior: "smooth" });}}
            >
              <img src={item.images[0]} alt={item.name} className=" mt-10  w-full h-100 object-cover" />
              <h2 className='font-light text-xl'>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default NewArrivals