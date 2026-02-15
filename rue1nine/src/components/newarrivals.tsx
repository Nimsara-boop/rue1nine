import React from 'react'
import { assets } from '../assets/assets'


function NewArrivals() {
  return (
    <div>
        <div className="min-h-screen bg-cover bg-center w-full overflow-hidden"
                    style={{ backgroundImage: `url(${assets.hero2})` }}
                    id='NewArrivals'></div>
    </div>
  )
}

export default NewArrivals