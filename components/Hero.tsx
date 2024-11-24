"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="relative h-[100vh] ">
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
            className=""
          />
        </div>
      ))}

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl hero_stroke text-white font-bold mb-4 stroke-blue-950">
          Discover the Beauty of Sri Lanka
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Experience the rich culture, adventure, and breathtaking landscapes
          with Tranquil Sri Lanka.
        </p>
        <Link href="/plan-tour">
          <button className="bg-[#003366] border border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-[#004080] transition duration-300 text-sm md:text-lg">
            Plan Your Tour
          </button>
        </Link>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
