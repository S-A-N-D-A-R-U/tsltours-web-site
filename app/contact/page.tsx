"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import axios from "axios";

interface FormInputs {
  fullName: string;
  email: string;
  arrivalDate: string;
  departureDate: string;
  budget: string;
  travelType: string[];
  preferredActivities: string[];
  numberOfTravelers: number;
  children: boolean;
  specialRequirements?: string;
}

const PlanForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await axios.post("/api/send-email", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            {...register("fullName", { required: "Full name is required" })}
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter your full name"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* Arrival Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Arrival Date
          </label>
          <input
            {...register("arrivalDate", {
              required: "Arrival date is required",
            })}
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.arrivalDate && (
            <p className="text-red-500 text-xs">{errors.arrivalDate.message}</p>
          )}
        </div>

        {/* Departure Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <input
            {...register("departureDate", {
              required: "Departure date is required",
            })}
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.departureDate && (
            <p className="text-red-500 text-xs">
              {errors.departureDate.message}
            </p>
          )}
        </div>

        {/* Budget */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Your Budget
          </label>
          <select
            {...register("budget", {
              required: "Budget selection is required",
            })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select...</option>
            <option value="Budget">Budget</option>
            <option value="Standard">Standard</option>
            <option value="Luxury">Luxury</option>
          </select>
          {errors.budget && (
            <p className="text-red-500 text-xs">{errors.budget.message}</p>
          )}
        </div>

        {/* Number of Travelers */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Number of Travelers
          </label>
          <input
            {...register("numberOfTravelers", {
              required: "Number of travelers is required",
              min: 1,
            })}
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          />
          {errors.numberOfTravelers && (
            <p className="text-red-500 text-xs">
              {errors.numberOfTravelers.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Type of Travel */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type of Travel
          </label>
          <div className="mt-1">
            {[
              "Cultural Tourism",
              "Adventure",
              "Wildlife",
              "Historical Tours",
              "Beach",
            ].map((travelType) => (
              <label key={travelType} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={travelType}
                  {...register("travelType", {
                    required: "At least one travel type is required",
                  })}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span>{travelType}</span>
              </label>
            ))}
          </div>

          {errors.travelType && (
            <p className="text-red-500 text-xs">{errors.travelType.message}</p>
          )}
        </div>

        

        {/* Preferred Activities */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Preferred Activities
          </label>
          <div className="mt-1">
            {[
              "Hiking/Trekking",
              "Safari/Wildlife",
              "Scuba Diving/Snorkeling",
              "Temple & Cultural Site Visits",
              "Food Tours",
              "Waterfalls & Nature",
            ].map((activity) => (
              <label key={activity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={activity}
                  {...register("preferredActivities")}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span>{activity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Dietary Restrictions
          </label>
          <div className="mt-1">
            {[
              "Vegetarian",
              "Vegan",
              "Gluten-Free",
              "Halal",
              "Kosher",
              "Others",
            ].map((restriction) => (
              <label key={restriction} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={restriction}
                  {...register("dietaryRestrictions")}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span>{restriction}</span>
              </label>
            ))}
          </div>
        </div>*/}
        </div>
        

        {/* Special Requirements */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Special Requirements
          </label>
          <textarea
            {...register("specialRequirements")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Any special requirements or preferences?"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanForm;
