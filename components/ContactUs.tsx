import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className=" bg-[url('/hero1.jpg')] bg-cover bg-center  bg-black  ">
      <div className="max-w-7xl mx-auto  flex flex-col md:flex-row px-8 lg:px-24 ">
        {/* Left Section with Background Image */}
        <div className="md:w-1/2 w-full  flex items-center justify-center">
          <div className="  text-white ">
            <h1 className="text-5xl font-bold mb-4">Get in Touch with Us</h1>
            <p className="text-lg">
              We’d love to hear from you. Reach out with any questions or
              inquiries and we’ll get back to you as soon as possible!
            </p>
          </div>
        </div>

        {/* Right Section with Contact Form */}
        <div className="md:w-1/2 w-full py-8 flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
