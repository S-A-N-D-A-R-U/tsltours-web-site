import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Blog And Article
        </h2>

        {/* Main grid layout: 6 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {/* Left column: One large card, spans 4 out of 6 columns */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col h-full">
              <Image
                className="h-64 w-full object-cover"
                src=""
                alt="Nature"
                width={800}
                height={600}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">24 July, 2024</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Explore breathtaking destinations around the world for an
                  unforgettable experience.
                </h3>
                <p className="mt-2 text-gray-600">
                  Learn more about hidden gems and popular tourist spots for
                  your next adventure.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Two cards, divided into top and bottom */}
          <div className="lg:col-span-4 grid grid-rows-2 gap-5">
            {/* Top right: One horizontal card across the top middle and right */}
            <div className="flex flex-row bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                className="h-32 w-full object-cover"
                src=""
                alt="City"
                width={800}
                height={600}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  24 August, 2024
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  A Guide to Urban Adventures for City Lovers.
                </h3>
                <p className="mt-2 text-gray-600">
                  Discover the most exciting city tours and vibrant urban
                  experiences worldwide.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>

            {/* Bottom right: One horizontal card across the bottom middle and right */}
            <div className=" flex flex-row bg-white shadow-md rounded-lg overflow-hidden">
              <Image
                className="h-32 w-full object-cover"
                src=""
                alt="Mountain"
                width={800}
                height={600}
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">24 March, 2024</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Mountain Escapades for Nature Enthusiasts.
                </h3>
                <p className="mt-2 text-gray-600">
                  Experience the thrill of hiking and outdoor activities in the
                  world&apos;s best mountain ranges.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:text-blue-800"
                >
                  Read More &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
