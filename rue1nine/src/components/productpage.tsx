import { useParams } from "react-router-dom"
import { tshirtData, tshirtDataWomen } from "../assets/assets"
import { useState } from "react"



function ProductPage() {
  const { id } = useParams()
  const product = tshirtData.find((item) => item.id === Number(id)) || tshirtDataWomen.find((item) => item.id === Number(id))
  const [selectedImage, setSelectedImage] = useState(product?.images[0] ?? "")

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
        <h1 className="text-3xl font-semibold">
          {product.name}
        </h1>

        <p className="text-xl text-gray-600 mt-4">
          {product.price}
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          {product.description}
        </p>

        <button className="mt-8 bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
          onClick={() => {
            window.location.href = "https://wa.me/9474339130?text=I'm%20interested%20in%20the%20product:%20" + encodeURIComponent(product.name);
          }}>
          Order Now
        </button>
      </div>


    </div >
  )
}

export default ProductPage