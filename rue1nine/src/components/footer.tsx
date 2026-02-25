import { assets } from '../assets/assets'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

        {/* Brand / Logo */}
        <div className="flex flex-col items-start">
          <img src={assets.logo_dark} className='w-40'/>
          <p className="text-gray-400 text-sm">
            Premium products for a sophisticated lifestyle.
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
          <a
            href="tel:+94728733580"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            +94 72 873 3580
          </a>
          <p className="text-gray-400 text-sm mt-1">Available 9am - 6pm IST</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <a href="#Header" className="hover:text-gray-300 transition-colors duration-200">Home</a>
          <a href="#NewArrivals" className="hover:text-gray-300 transition-colors duration-200">New Arrivals</a>
          <a href="#PrestigeLine" className="hover:text-gray-300 transition-colors duration-200">Prestige Line</a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} RUE1NINE. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer