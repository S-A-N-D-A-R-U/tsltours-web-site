import React from 'react';
import HighlightSection from './components/HighlightSection';
import WhyVisitSection from './components/WhyVisitSection';



const AboutSriLanka = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
    {/*HeroSection */}
    <div className="relative h-[80vh]">
      <div className="absolute inset-0">
        <img
          src="/image1.jpg"
          alt="Sigiriya Rock Fortress"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Sri Lanka: The Pearl of the Indian Ocean
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover an island paradise where ancient wonders meet tropical beauty
        </p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
          Explore Sri Lanka's Wonders
        </button>
      </div>
    </div>
      {/* Intro Section */}
      <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Sri Lanka</h2>
          <p className="text-xl text-gray-600 mb-8">
          Sri Lanka, often celebrated as the Pearl of the Indian Ocean, is a captivating tropical paradise just 880 kilometers north of the equator. Spanning a modest 65,610 square kilometers, this small island packs an extraordinary punch with its breathtaking landscapes, vibrant culture, and warm hospitality. With over 2,500 years of recorded history, Sri Lanka invites travelers to immerse themselves in its timeless charm, offering experiences that blend adventure, tranquility, and unforgettable beauty.
          </p>
        </div>
      </div>
    </div>
      {/* HighlightSection */}
      <HighlightSection/>
      <WhyVisitSection/>

      <div className="relative py-20">
      <div className="absolute inset-0">
        
        <img
          src="https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg"
          alt="Sri Lankan landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative container mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Plan Your Sri Lankan Adventure</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let us help you create the perfect itinerary for an unforgettable journey through paradise.
        </p>
        <button className="bg-yellow-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-400 transition-colors">
          Start Planning Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default AboutSriLanka;