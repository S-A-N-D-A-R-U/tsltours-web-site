"use client";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        alert("Thank you for contacting us. We'll get back to you soon!");
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  

  return (
    <div className="container mx-auto p-8 bg-beige-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">Contact Us</h1>
      {!submitted ? (
        <form className="bg-white shadow-md rounded-md p-8 max-w-2xl mx-auto" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your email address"
            />
          </div>

          {/* Subject */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
              rows= {5}
              placeholder="Enter your message"
            ></textarea>
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
        <h2 className="text-2xl font-semibold text-green-600 text-center mt-10">
          Your message has been submitted successfully!
        </h2>
      )}
    </div>
  );
};

export default ContactUs;

