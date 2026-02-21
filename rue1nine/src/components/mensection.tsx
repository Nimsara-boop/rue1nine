import React from 'react'
import { assets } from '../assets/assets'

function MenSection() {
  return (
    <div id='MenSection' className="flex flex-col bg-amber-700">
      <div className='mt-23 bg-gray-200'>filters</div>
      <div className="flex flex-grid columns-3">
        
        <div>
          <img src={assets.tshirt1a} />
          <></>
        </div>
        <div>
          <img src={assets.tshirt2a} />
        </div>
        <div>
          <img src={assets.tshirt3a} />
        </div>
      </div>
    </div>
  )
}

export default MenSection