import React from 'react';

const WhyVisitSection = () => {
  const reasons = [
    {
      title: "Adventure",
      description: "From trekking through misty mountains to surfing perfect waves",
      icon: "🏃‍♂️"
    },
    {
      title: "Pristine Beaches",
      description: "Golden sands and turquoise waters along 1,340km of coastline",
      icon: "🏖️"
    },
    {
      title: "Wildlife",
      description: "Home to elephants, leopards, and countless exotic species",
      icon: "🐘"
    },
    {
      title: "Rich Heritage",
      description: "8 UNESCO World Heritage sites and ancient civilizations",
      icon: "🏛️"
    },
    {
      title: "Warm Hospitality",
      description: "Experience the legendary Sri Lankan welcome",
      icon: "🤝"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Visit Sri Lanka?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVisitSection;