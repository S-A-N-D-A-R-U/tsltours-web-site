"use client"
import { useState } from "react";
import DayTourCard from "./DayTourCard";

type Tour = {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: string;
};

const tours: Tour[] = [
  { id: "1", title: "Sigiriya & Dambulla", description: "16 Hours • Pickup Available • Small Group", category: "Cultural Tours", imageUrl: "/destination/sigiriya.jpg" , price: "$40"},
  { id: "2", title: "Whale Watching", description: "4 Hours • Pickup Available", category: "Water Activities", imageUrl: "/Whale Watching mirissa.jpeg" , price: "$40" },
  { id: "3", title: "Yala Safari", description: "10 Hours • Pickup Available", category: "Wildlife Safari", imageUrl: "/wild1.jpg"  , price: "$40"},
  { id: "4", title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg"  , price: "$40"},
  { id: "4", title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg"  , price: "$40"},
  { id: "4", title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg" , price: "$40" },
  { id: "4", title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg"  , price: "$40"},
  // Add more tour objects here
];

const categories = [
  "All", 
  "Adventure", 
  "Wildlife Safari", 
  "Water Activities", 
  "Day Tours",
  "Tea Plantations",
];
const DayTours = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours = activeCategory === "All"
    ? tours
    : tours.filter(tour => tour.category === activeCategory);

  return (
    <section className=" max-w-7xl m-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Day Tours and Excursions</h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-semibold rounded ${
              activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
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
    </section>
  );
}
export default DayTours;