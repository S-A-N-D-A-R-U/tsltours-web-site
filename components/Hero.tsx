"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';


const sliderImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative h-[90vh] ">
      {/* Slider Section */}
      {sliderImages.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${idx}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-75"
          />
        </div>
      ))}

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
          Discover the Beauty of Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Experience the rich culture, adventure, and breathtaking landscapes
          with Tranquil Sri Lanka.
        </p>
        <Link href="/plan-tour"><button className="bg-[#003366] border border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#004080] transition duration-300 text-sm md:text-lg">
          Plan Your Tour
        </button></Link>
        
      </div>
    </div>
  );
};

export default Hero;
