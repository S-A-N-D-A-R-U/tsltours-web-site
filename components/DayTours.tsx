"use client"
import { useState } from "react";

type Tour = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
};

const tours: Tour[] = [
  { id: 1, title: "Sigiriya & Dambulla", description: "16 Hours • Pickup Available • Small Group", category: "Cultural Tours", imageUrl: "/destination/sigiriya.jpg" },
  { id: 2, title: "Whale Watching", description: "4 Hours • Pickup Available", category: "Water Activities", imageUrl: "/Whale Watching mirissa.jpeg" },
  { id: 3, title: "Yala Safari", description: "10 Hours • Pickup Available", category: "Wildlife Safari", imageUrl: "/wild1.jpg" },
  { id: 4, title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg" },
  { id: 4, title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg" },
  { id: 4, title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg" },
  { id: 4, title: "Tea Plantation Tour", description: "8 Hours • Pickup Available", category: "Tea Plantations", imageUrl: "/Tea Plantation Tour.jpg" },
  // Add more tour objects here
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
  "Ayurveda & Wellness"
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
          <div key={tour.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={tour.imageUrl} alt={tour.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl">{tour.title}</h3>
              <p className="text-gray-600 text-sm py-1  font-semibold mb-4">{tour.description}</p>
              <button className="mt-auto px-3 py-2 bg-blue-600 text-white rounded text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default DayTours;