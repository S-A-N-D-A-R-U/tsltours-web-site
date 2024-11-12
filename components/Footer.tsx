import React from 'react'
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaTripadvisor,
} from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-[#002244] text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
      

        <div className='text-center px-10'>
        <Image
        src={"/logo.png"}
        alt={"logo"}
        width={250}
        height={300}
        className=" "
      />
          <p className="mb-4 font-semibold ">Featured Tour Planner</p>
          <div className="flex space-x-4 justify-center">
            <a href="#" aria-label="Facebook" className="text-blue-600 hover:text-blue-700">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="text-red-600 hover:text-red-700">
              <FaYoutube size={24} />
            </a>
            <a href="#" aria-label="TripAdvisor" className="text-green-600 hover:text-green-700">
              <FaTripadvisor size={24} />
            </a>
            <a href="#" aria-label="Pinterest" className="text-red-500 hover:text-red-600">
              <FaPinterest size={24} />
            </a>
          </div>
        </div>

        {/* Top Destinations */}
        <div>
          <h3 className="font-bold mb-3">Top Destinations</h3>
          <ul className="space-y-1">
            {['Anuradhapura', 'Colombo', 'Ella', 'Galle', 'Kandy', 'Nuwaraeliya', 'Polonnaruwa', 'Trincomalee', 'Yala'].map((destination) => (
              <li key={destination}>
                <a href="#" className="hover:underline">
                  {destination}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Interests */}
        <div>
          <h3 className="font-bold mb-3">Travel Interests</h3>
          <ul className="space-y-1">
            {['Adventure Travel', 'Wildlife & Nature', 'Art & Culture', 'Beaches', 'Family Holidays', 'Festivals', 'Food & Drink', 'Road Trips', 'Romance'].map((interest) => (
              <li key={interest}>
                <a href="#" className="hover:underline">
                  {interest}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3">About Us</h3>
          <ul className="space-y-1">
            {['Privacy Policy', 'About Us', 'Tour Planner', 'Terms & Conditions', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
