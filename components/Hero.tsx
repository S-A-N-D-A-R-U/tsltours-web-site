"use client";
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FloatingStats } from "./FloatingStats";

const sliderImages = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
  "/hero7.jpg",
  "/hero8.jpg",
  "/hero9.jpg",
  "/hero10.jpg",
  "/hero11.jpg",
  "/hero12.jpg",
  "/hero13.jpg",
  "/hero14.jpg",
  "/hero15.jpg",
  "/hero16.jpg",
  "/hero17.jpg",
];

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
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/10 to-transparent z-10 flex flex-col justify-center items-start  px-4 md:px-8 md:pl-16">
        <div className=" max-w-4xl space-y-8">
          <h1 className="animate-fade-in text-6xl font-bold leading-tight text-white md:text-7xl">
            Experience the Wonder of
            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sri Lanka
            </span>
          </h1>
          <p className="animate-fade-in text-xl text-gray-200 [animation-delay:200ms] md:text-2xl">
            Discover ancient temples, pristine beaches, and lush landscapes in this tropical paradise.
            Your extraordinary journey begins here.
          </p>
          <Link href="/plan-tour">
            <button className="group mt-5 relative inline-flex items-center gap-2 bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">
              Start Your Journey
              <ChevronRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
