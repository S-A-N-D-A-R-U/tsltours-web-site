"use client";
import DayTourCard from "@/components/DayTourCard";
import { useState } from "react";


type Tour = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: string;
};

const tours: Tour[] = [
  {
    id: "1",
    title: "Sigiriya & Dambulla",
    description: "16 Hours • Pickup Available • Small Group ",
    category: "Cultural Tours",
    imageUrl: "/destination/sigiriya.jpg",
    price: "$40",
  },
  {
    id: "2",
    title: "Whale Watching",
    description: "4 Hours • Pickup Available",
    category: "Water Activities",
    imageUrl: "/Whale Watching mirissa.jpeg",
    price: "$65",
  },
  {
    id: "3",
    title: "Yala National Park: Morning or Afternoon Golden Hour Safari",
    description: "10 Hours • Pickup Available",
    category: "Wildlife Safari",
    imageUrl: "/wild1.jpg",
    price: "$35",
  },
  {
    id: "4",
    title: "Tea Plantation Tour",
    description: "8 Hours • Pickup Available",
    category: "Tea Plantations",
    imageUrl: "/Tea Plantation Tour.jpg",
    price: "$50",
  },
  {
    id: "4",
    title: "Tea Plantation Tour",
    description: "8 Hours • Pickup Available",
    category: "Tea Plantations",
    imageUrl: "/Tea Plantation Tour.jpg",
    price: "$50",
  },
  {
    id: "4",
    title: "Tea Plantation Tour",
    description: "8 Hours • Pickup Available",
    category: "Tea Plantations",
    imageUrl: "/Tea Plantation Tour.jpg",
    price: "$50",
  },
];

const categories = [
  "All",
  "Cultural Tours",
  "Adventure",
  "Wildlife Safari",
  "Water Activities",
  "Beach Tours",
  "Day Tours",
  "Scenic Train Rides",
  "Tea Plantations",
  "Religious Sites",
  "Ayurveda & Wellness",
];
const ToursPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours =
    activeCategory === "All"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  return (
    <div className="relative w-full  my-20">
      <div className="max-w-7xl m-auto px-8 ">
        <h1 className="text-3xl py-7  text-blue-950 font-bold text-center md:text-5xl md:text-left">
          Day Tours and Activities
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
            <DayTourCard id={tour.id} key={tour.id} title={tour.title} imageUrl={tour.imageUrl} description={tour.description} price={tour.price}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
