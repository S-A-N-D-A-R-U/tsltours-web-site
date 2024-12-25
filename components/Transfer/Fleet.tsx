"use client";
import React, { useState } from 'react';
import { Users, Wifi, Briefcase } from 'lucide-react';
import VehicleDetails from './VehicleDetails';


const vehicles = [
  {
    id: '1',
    name: 'Luxury Sedan',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
    capacity: {
      passengers: 4,
      luggage: 2,
      handLuggage: 2
    },
    description: 'Perfect for business travel or small family trips. Experience comfort and style.',
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80'
    ],
    features: [
      'Air Conditioning',
      'Wi-Fi',
      'USB Charging',
      'Leather Seats',
      'Bottled Water',
      'Music System'
    ],
    safetyFeatures: [
      'ABS',
      'Airbags',
      'GPS Tracking',
      'First Aid Kit',
      '24/7 Support',
      'Regular Maintenance'
    ],
    pricing: {
      basePrice: 75,
      currency: '$',
      unit: 'day'
    },
    availability: {
      locations: ['Colombo', 'Kandy', 'Galle'],
      hours: '24/7 availability',
      leadTime: 'Book at least 24 hours in advance'
    },
    rating: 4.8
  },
  {
    id: '2',
    name: 'Premium Van',
    image: 'https://images.unsplash.com/photo-1464219789935-c2d9d9eb4b19?auto=format&fit=crop&q=80',
    capacity: {
      passengers: 8,
      luggage: 4,
      handLuggage: 4
    },
    description: 'Ideal for group travel and family vacations. Spacious and comfortable.',
    images: [
      'https://images.unsplash.com/photo-1464219789935-c2d9d9eb4b19?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80'
    ],
    features: [
      'Air Conditioning',
      'Wi-Fi',
      'USB Charging',
      'Reclining Seats',
      'LCD Screen',
      'Mini Fridge'
    ],
    safetyFeatures: [
      'ABS',
      'Multiple Airbags',
      'GPS Tracking',
      'First Aid Kit',
      '24/7 Support',
      'Regular Maintenance'
    ],
    pricing: {
      basePrice: 120,
      currency: '$',
      unit: 'day'
    },
    availability: {
      locations: ['Colombo', 'Kandy', 'Galle', 'Negombo'],
      hours: '24/7 availability',
      leadTime: 'Book at least 24 hours in advance'
    },
    rating: 4.9
  },
  {
    id: '3',
    name: 'Luxury Bus',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
    capacity: {
      passengers: 16,
      luggage: 16,
      handLuggage: 16
    },
    description: 'Perfect for large groups and tours. Maximum comfort for long journeys.',
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570125909517-53cb21c89ff3?auto=format&fit=crop&q=80'
    ],
    features: [
      'Air Conditioning',
      'Wi-Fi',
      'USB Charging',
      'Reclining Seats',
      'LCD Screens',
      'Restroom',
      'Mini Kitchen'
    ],
    safetyFeatures: [
      'ABS',
      'Multiple Airbags',
      'GPS Tracking',
      'First Aid Kit',
      '24/7 Support',
      'Regular Maintenance',
      'Emergency Exit'
    ],
    pricing: {
      basePrice: 250,
      currency: '$',
      unit: 'day'
    },
    availability: {
      locations: ['Colombo', 'Kandy', 'Galle', 'Negombo', 'Ella'],
      hours: '24/7 availability',
      leadTime: 'Book at least 48 hours in advance'
    },
    rating: 4.9
  }
];

export default function Fleet() {
  const [selectedVehicle, setSelectedVehicle] = useState<typeof vehicles[0] | null>(null);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Fleet
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{vehicle.name}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{vehicle.capacity.passengers} passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-blue-600" />
                    <span>Free Wi-Fi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span>Luggage Space</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedVehicle && (
        <VehicleDetails
          vehicle={selectedVehicle}
          onClose={() => setSelectedVehicle(null)}
        />
      )}
    </div>
  );
}