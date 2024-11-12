"use client";
import { useState } from "react";
import TourPackageItemcard from "@/components/TourPackageItemcard";

export type Tour = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: string;
  rating: number;
  duration: string;
};

const tours: Tour[] = [
  {
    id: "1",
    title: "Hill Country Tours",
    price: "$240",
    rating: 4.8,
    description:
      "The hill country of Sri Lanka reflects the aspirations of 19th & 20th century British colonisers to create a home away from home.",
    duration: "2days",
    category: "Wildlife & Nature",
    imageUrl: "/popular1.jpg",
  },
  {
    id: "2",
    title: "Cultural Heritage Tour",
    price: "$240",
    rating: 4.8,
    description:
      "Our cultural tours are conducted by guides knowledgeable in all aspects of the island’s history, enabling you to realise our unique heritage",
    duration: "2days",
    category: "Art & Culture",
    imageUrl: "/popular2.jpg",
  },
  {
    id: "3",
    title: "Beach Tours",
    price: "$240",
    rating: 4.8,
    description:
      "We know the best beaches, hidden bays and secret coves for sunbathing, swimming or surfing to reward you with an unforgettable beach holiday",
    duration: "2days",
    category: "Beaches",
    imageUrl: "/popular3.jpg",
  },
  {
    id: "4",
    title: "Ayurvedic Tours",
    price: "$240",
    rating: 4.8,
    description:
      "Ayurveda is an ancient, traditional wellness therapy based on harmonious balance within the body achieved through herbal diet and massage treatment",
    duration: "2days",
    category: "Wildlife & Nature",
    imageUrl: "/popular4.jpg",
  },
  {
    id: "5",
    title: "Honeymoon Tours",
    price: "$240",
    rating: 4.8,
    description:
      "Private beach villas, secluded colonial bungalows, and luxurious hotel suites make Sri Lanka an ideal destination for honeymoons and weddings",
    duration: "2days",
    category: "Romance",
    imageUrl: "/popular5.jpg",
  },
  {
    id: "6",
    title: "Wildlife",
    price: "$240",
    rating: 4.8,
    description:
      "Our Seat-in Coach Tours give you the ability to book an authentic travel experience of Sri Lanka without having to go through the hassle of arranging  ...",
    duration: "2days",
    category: "Wildlife & Nature",
    imageUrl: "/popular6.jpg",
  },
];


const categories = [
  "All",
  "Adventure Travel",
  "Wildlife & Nature",
  "Art & Culture",
  "Beaches",
  "Family Holidays",
  "Festivals",
  "Food & Drink",
  "Road Trips",
  "Romance",
];
const TourPackagesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours =
    activeCategory === "All"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  return (
    <div className="relative w-full  my-20">
      <div className="max-w-7xl m-auto px-8 ">
        <h1 className="text-3xl py-7  text-blue-950 font-bold text-center md:text-5xl md:text-left">
          Tours Packages
        </h1>

        <div className="flex flex-wrap  gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-semibold rounded ${
                activeCategory === category
                  ? "bg-blue-950 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Tour Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTours.slice(0, 8).map((tour) => (
            <TourPackageItemcard id={tour.id} key={tour.id} title={tour.title} imageUrl={tour.imageUrl} description={tour.description} price={tour.price} duration={tour.duration}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackagesPage;
