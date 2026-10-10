import { useParams } from "react-router-dom"
import { tshirtDataNewArrivals, tshirtDataWomen, tshirtDataMen } from "../assets/assets"
import { useState } from "react"
import { assets } from '../assets/assets'
import { TypeAnimation } from 'react-type-animation';
import './productpage.js'
import './productpage.css'


function ProductPage() {
  const { id } = useParams()
  const product = tshirtDataMen.find((item) => item.id === String(id)) || tshirtDataWomen.find((item) => item.id === String(id)) || tshirtDataNewArrivals.find((item) => item.id === String(id))
  const [selectedImage, setSelectedImage] = useState(product?.images[0] ?? "")
  const [selectedSize, setSelectedSize] = useState("")
  const [showSizeWarning, setShowSizeWarning] = useState(false)

  if (!product) {
    return <div className="pt-24">Product not found</div>
  }

  return (
    <div className="pt-28 px-3 sm:px-4 grid md:grid-cols-2 gap-6 md:gap-10 overflow-hidden">

      {/* Other Images of the same product Section */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-2 min-w-0">
        <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
          {product.images.map((image, index) => (
            <img
              key={index}
              alt={product.name}
              src={image}
              onClick={() => setSelectedImage(image)}
              className={`cursor-pointer w-20 h-20 object-cover flex-shrink-0 ${selectedImage === image ? 'opacity-100' : 'opacity-70'
                }`}
            />
          ))}
        </div>

        <div className="sm:col-span-4 min-w-0">
          <img
            src={selectedImage || product.images[0]}
            alt={product.name}
            className="w-full object-cover max-h-[100vh]"
          />
        </div>
      </div>

      {/* Content Section */}
      <div>
        <h1 className="text-3xl font-mono mb-10">
          <TypeAnimation
            sequence={[
              product.name,
            ]}
            wrapper="span"
            speed={20}               // Custom typing speed (higher = faster)
            style={{ display: 'inline-block'}}
          />
        </h1>


        <p className="text-lg text-gray-600 mt-4 font-mono font-bold">
          {product.price}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed font-mono text-sm">
          {product.description}
        </p>

        <div className="item-sizes mt-4">
          {["XL", "L", "M", "S"].map((size) => (
            <span
              key={size}
              className={selectedSize === size ? "selected" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </span>
          ))}
        </div>

        <button
          className="mt-8 bg-black text-white px-6 py-3 hover:bg-gray-800 transition mb-20"
          onClick={() => {
            if (!selectedSize) {
              setShowSizeWarning(true);
              return;
            }
            const message = `I'm interested in the product: ${product.name} in size ${selectedSize} with price ${product.price}`;
            window.open(`https://wa.me/94743391530?text=${encodeURIComponent(message)}`, "_blank");
          }}
        >
          Order Now
        </button>

        {showSizeWarning && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
              <p className="mb-4 text-lg">Please select a size.</p>
              <button
                className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
                onClick={() => setShowSizeWarning(false)}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>

      {/*Browse More Section*/}
      <div className="browse-more md:col-span-2">
        <h3>Browse More</h3>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-10">
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
                <h2 className='font-light text-lg sm:text-xl py-2 text-gray-200'>{item.name}</h2>
                <p className='text-sm text-gray-800 font-mono font-bold'>{item.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div >
  )
}

export default ProductPage