import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-charcoal text-center mb-8">
          About Tranquil Sri Lanka
        </h2>

        {/* Description */}
        <p className="text-lg lg:text-xl text-charcoal text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Tranquil Sri Lanka is dedicated to providing unforgettable experiences across Sri Lanka's
          stunning landscapes, rich culture, and diverse wildlife. Our goal is to offer unique travel
          experiences while maintaining a sustainable and eco-friendly approach to tourism.
        </p>

        {/* Content: Image & Description */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/about-us.jpg" // Ensure the image exists in the public/images folder
              alt="Sri Lanka Tourism"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-deep-green mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-charcoal mb-6">
              At Tranquil Sri Lanka, we offer:
            </p>

            <ul className="text-lg text-charcoal space-y-4">
              <li className="flex items-center">
                <span className="bg-blue-400 text-white p-2 rounded-full mr-3">
                  ✔️
                </span>
                Tailor-made itineraries that suit your preferences, budget, and duration of stay.
              </li>
              <li className="flex items-center">
                <span className="bg-blue-400 text-white p-2 rounded-full mr-3">
                  ✔️
                </span>
                Expert guides and a passionate team committed to making your trip memorable.
              </li>
              <li className="flex items-center">
                <span className="bg-blue-400 text-white p-2 rounded-full mr-3">
                  ✔️
                </span>
                Sustainable travel experiences that respect local culture and the environment.
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="/contact"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
