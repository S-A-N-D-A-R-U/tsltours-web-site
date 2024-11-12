"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface FormInputs {
  fullName: string;
  email: string;
  phoneNumber: string;
  arrivalDate: string;
  departureDate: string;
  numberOfAdults: number;
  numberOfChildren: string;
  travelInterests: string[];
  accommodationPreferences: string[];
  budget: string;
  additionalServices: string[];
  specificLocations?: string;
  dietaryRestrictions?: string;
}

const PlanForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true);
    setMessage(null);
    try {
      const response = await axios.post("/api/plan-tour", data);
      if (response.status === 200) {
        setMessage("Form submitted successfully!");
      } else {
        setMessage("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl m-auto">
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Custom Tour Request Form</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 1. Personal Information */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold ">Personal Information</h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              {...register("fullName", { required: "Full name is required" })}
              type="text"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register("phoneNumber", { required: "Phone number is required" })}
              type="text"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>}
          </div>

          {/* 2. Travel Details */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold ">Travel Details</h2>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Arrival Date</label>
            <input
              {...register("arrivalDate", { required: "Arrival date is required" })}
              type="date"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.arrivalDate && <p className="text-red-500 text-xs">{errors.arrivalDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Departure Date</label>
            <input
              {...register("departureDate", { required: "Departure date is required" })}
              type="date"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.departureDate && <p className="text-red-500 text-xs">{errors.departureDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Adults</label>
            <input
              {...register("numberOfAdults", { required: "Number of adults is required", min: 1 })}
              type="number"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
            />
            {errors.numberOfAdults && <p className="text-red-500 text-xs">{errors.numberOfAdults.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Children (with ages)</label>
            <input
              {...register("numberOfChildren")}
              type="text"
              className="bg-gray-100 mt-1 block w-full rounded-md border-blue-900 p-1 border shadow-sm focus:bg-white"
              placeholder="e.g., 2 (5 and 8 years old)"
            />
          </div>

          {/* 3. Travel Interests */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold ">Travel Interests (Select all that apply)</h2>
          </div>
          {[
            "Nature & Scenic Beauty",
            "History & Culture",
            "Beach & Relaxation",
            "Adventure & Outdoor Activities",
            "Wildlife Safaris",
            "Wellness & Spa",
            "Local Food & Cuisine",
            "Festivals & Local Traditions",
            "Hiking & Trekking",
            "Water Sports (e.g., diving, snorkeling, surfing)",
          ].map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={interest}
                {...register("travelInterests")}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out "
              />
              <span>{interest}</span>
            </label>
          ))}

          {/* 4. Accommodation Preferences */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Accommodation Preferences</h2>
          </div>
          {[
            "Villas",
            "Standard Hotels",
            "2-star Hotels",
            "3-star Hotels",
            "4-star Hotels",
            "5-star Hotels",
            "Home Stays",
          ].map((accommodation) => (
            <label key={accommodation} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={accommodation}
                {...register("accommodationPreferences")}
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <span>{accommodation}</span>
            </label>
          ))}

          {/* 5. Rough Budget */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Rough Budget (per person)</h2>
            {["$500 - $1000", "$1000 - $2000", "$2000 - $3000", "$3000+"].map((budgetRange) => (
              <label key={budgetRange} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={budgetRange}
                  {...register("budget", { required: "Budget selection is required" })}
                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span>{budgetRange}</span>
              </label>
            ))}
          </div>

          {/* 6. Additional Services */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Additional Services (Optional)</h2>
            {[
              "Private Chauffeur",
              "Guided Tours",
              "Airport Transfers",
              "Spa/Wellness Packages",
              "Special Occasion Arrangements (Honeymoon, Anniversary, etc.)",
            ].map((service) => (
              <label key={service} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={service}
                  {...register("additionalServices")}
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>

          {/* 7. Additional Information */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
            <textarea
              {...register("specificLocations")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Any specific locations or experiences you would like to include?"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <textarea
              {...register("dietaryRestrictions")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Any dietary restrictions or special needs?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md ${
              loading ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <div className={`mt-4 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanForm;
