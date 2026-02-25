import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { tshirtData } from '../assets/assets'

function MenSection() {
  const navigate = useNavigate()

  return (
    <div id='MenSection' className="flex flex-col bg-[#b0b3af]">
      <div className='mt-23 bg-[#b0b3af] py-8 px-4 font-light'>Filters</div>
      <div className="grid grid-cols-3 mx-4 items-center justify-center w-full">
      {tshirtData.map((item)=>(
        <div key={item.id}
        className="w-4/5 h-full mb-4 border-1 border-gray-500  bg-[#ADB5AB] "
        onClick={()=> {navigate(`/product/${item.id}`);
          window.scrollTo({ top: 0, behavior: "smooth" }); }}
        
        >
          <img src={item.images[0]} alt={item.name} className=" mt-10  w-full h-100 object-cover"/>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default MenSection