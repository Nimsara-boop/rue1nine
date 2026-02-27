import { assets } from '../assets/assets'
import { useNavigate, } from 'react-router-dom'
import { wtshirtData } from '../assets/assets'

function WomenSection() {
  const navigate = useNavigate()

  return (
    <div id='WomenSection' className="flex flex-col items-center justify-center overflow-clip pl-4"
    //style={{ backgroundImage: `url(${assets.newarrivals})` }}
    >
      <div className='mt-23 py-8 px-4 font-light'>Filters</div>
      <div className=" backdrop-blur sm:flex sm:flex-col md:grid md:grid-cols-3 px-4 items-center justify-center w-full py-4 ml-4 overflow-hidden ">
        {wtshirtData.map((item) => (
          <div key={item.id}
            className=" px-4 sm:w-1/2 lg:w-4/5 h-full mb-4 border-gray-500 bg-[#ADB5AB] "
            onClick={() => {
              if (item.id === 3) {
                navigate("/PrestigeLine");
              } else {
                navigate(`/product/${item.id}`);
              }

              window.scrollTo({ top: 0, behavior: "smooth" });
            }}


          >
            <img src={item.images[0]} alt={item.name} className=" mt-10 w-full h-100 object-cover" />
            <h2 className='font-light text-xl'>{item.name}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <div className='text-black mt-12 text-4xl font-light mb-8'>- End of Collection -</div>

    </div>
  )
}

export default WomenSection