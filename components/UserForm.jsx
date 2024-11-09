"use client";
import { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    budget: "Budget",
    travelType: [],
    activities: [],
    numberOfTravelers: 1,
    hasChildren: false,
    numberOfChildren: 0,
    dietaryRestrictions: [],
    specialRequests: "",
    gdprConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Your travel details have been submitted successfully.");
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6">
        Personalized Travel Plan
      </h1>
      {!submitted ? (
        <form className="bg-white shadow-md rounded-md p-8" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Arrival Date */}
          <div className="mb-4">
            <label className="block text-gray-700">Arrival Date</label>
            <input
              type="date"
              name="arrivalDate"
              value={formData.arrivalDate}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]} // Ensures only future dates
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Departure Date */}
          <div className="mb-4">
            <label className="block text-gray-700">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              required
              min={formData.arrivalDate}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label className="block text-gray-700">Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="Budget">Budget</option>
              <option value="Standard">Standard</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          {/* Travel Type */}
          <div className="mb-4">
            <label className="block text-gray-700">Type of Travel</label>
            <div className="space-y-2">
              {["Cultural Tourism", "Adventure", "Wildlife", "Historical Tours", "Beach", "Eco-tourism"].map(
                (type) => (
                  <div key={type}>
                    <input
                      type="checkbox"
                      name="travelType"
                      value={type}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFormData((prev) => ({
                            ...prev,
                            travelType: [...prev.travelType, type],
                          }));
                        } else {
                          setFormData((prev) => ({
                            ...prev,
                            travelType: prev.travelType.filter((item) => item !== type),
                          }));
                        }
                      }}
                    />
                    <label className="ml-2 text-gray-700">{type}</label>
                  </div>
                )
              )}
            </div>
          </div>

          {/* GDPR Consent */}
          <div className="mb-4">
            <input
              type="checkbox"
              name="gdprConsent"
              checked={formData.gdprConsent}
              onChange={handleChange}
              required
            />
            <label className="ml-2 text-gray-700">I agree to the GDPR terms</label>
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <h2 className="text-2xl font-semibold text-green-600">Thank you for submitting your details!</h2>
      )}
    </div>
  );
};

export default UserForm;