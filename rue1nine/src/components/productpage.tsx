import { useParams } from "react-router-dom"
import { tshirtData } from "../assets/assets"
import { useState } from "react"



function ProductPage() {
  const { id } = useParams()
  const product =tshirtData.find( (item)=>item.id===Number(id))

  if (!product) {
    return <div className="pt-24">Product not found</div>
  }
  const [selectedImage, setSelectedImage] = useState(product.images[0])

  return (
    <div className="pt-28 px-4 grid md:grid-cols-2 gap-10">

      {/* Image Section */}
      <div className="grid grid-cols-5">
        <div className='flex flex-col'>
            {product.images.map((image, index)=>(
                <img key={index} alt={product.name}
                src={image}
                className="cursor-pointer px-2 pb-2"
                />
            ))}
        </div>
        
        <div className='col-span-4'>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full object-cover"
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

        <button className="mt-8 bg-black text-white px-6 py-3 hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>


    </div>
  )
}

export default ProductPage