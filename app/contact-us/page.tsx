// pages/contact.tsx

import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-center space-y-8">
      <h1 className="text-4xl font-semibold text-[#003366]">Contact Us</h1>
      <p className="text-gray-700 text-3xl">We would love to hear from you! Feel free to reach out for any inquiries.</p>

      {/* Contact Information */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-[#003366] text-4xl" />
          <div>
            <h3 className="text-3xl font-semibold">Phone</h3>
            <p className="text-gray-600 text-xl ">+94 77 123 4567</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-[#003366] text-4xl" />
          <div>
            <h3 className="text-3xl font-semibold">Email</h3>
            <p className="text-gray-600 text-xl">contact@tranquilsrilanka.com</p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <img
          src="/images/contact1.jpg"
          alt="Sri Lanka Beach"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/contact2.jpg"
          alt="Sri Lanka Mountains"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/contact3.jpg"
          alt="Sri Lanka Wildlife"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default ContactPage;
