import { assets, tshirtDataNewArrivals } from '../assets/assets'

function NewArrivals() {

  return (
    <div>
      <div className="min-h-screen bg-cover bg-center w-full bg-scroll md:bg-fixed overflow-hidden px-3 sm:px-4"
        style={{ backgroundImage: `url(${assets.rw2})` }}
        id='NewArrivals'>

        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-60 overflow-hidden">
          {tshirtDataNewArrivals.map((item) => (
          <a key={item.id}
            href={`/product/${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full h-full bg-[#000000]/50 block"
          >
              <div className="relative w-full h-100 sm:h-80 md:h-100">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                <img src={item.hoverimage} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-10">
                <img src={assets.logo_dark} alt="Logo" className=" w-16 h-4" />
                <h2 className='font-mono text-lg sm:text-xl py-2 text-gray-200'>{item.name}</h2>
                <p className='text-sm text-gray-400 font-mono'>{item.price}</p>
              </div>
            </a>
          ))}
        </div>

        <div className='text-white mt-10 text-2xl sm:text-4xl font-light mb-8 text-center'>- End of Collection -</div>

      </div>
    </div>

  )
}

export default NewArrivals