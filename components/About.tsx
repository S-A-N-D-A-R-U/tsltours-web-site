import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-blue-50 ">
      <div className="max-w-7xl m-auto flex md:gap-20 flex-col md:flex-row p-8 lg:px-24">
        <div className="w-full max-h-screen min-h-96 relative p-8">
          <Image
            src="/about-us.jpg" // Ensure the image exists in the public/images folder
            alt="Sri Lanka Tourism"
            width={600}
            height={400}
            className=" shadow-md object-cover w-[70%] h-[80%] absolute top-0 left-0  "
          />
          <Image
            src="/about-us.jpg" // Ensure the image exists in the public/images folder
            alt="Sri Lanka Tourism"
            width={600}
            height={400}
            className=" border-[10px] border-blue-50 object-cover w-[50%] h-[60%] absolute bottom-0 right-0  "
          />
        </div>
        <div className="w-full">
          <h2 className="text-2xl ">ABOUT US</h2>
          <h2 className="text-3xl font-semibold py-5">
            WE ARE POFESSIONAL PLANNERS FOR YOUR TRIP
          </h2>
          <p className="">
            Tranquil Sri Lanka is dedicated to providing unforgettable
            experiences across Sri Lanka&apos;s stunning landscapes, rich culture,
            and diverse wildlife. Our goal is to offer unique travel experiences
            while maintaining a sustainable and eco-friendly approach to
            tourism.
          </p>
          <h3 className="text-lg py-5">Why Choose Us?</h3>
          <ul className=" text-charcoal space-y-4">
            <li className="flex items-center gap-4">
              <Image
                src={"/check.svg"}
                alt={"meals icon"}
                height={50}
                width={50}
                className="h-auto w-6 "
              />
              Tailor-made itineraries that suit your preferences, budget, and
              duration of stay.
            </li>
            <li className="flex items-center gap-4">
              <Image
                src={"/check.svg"}
                alt={"meals icon"}
                height={50}
                width={50}
                className="h-auto w-6 "
              />
              Expert guides and a passionate team committed to making your trip
              memorable.
            </li>
            <li className="flex items-center gap-4">
              <Image
                src={"/check.svg"}
                alt={"meals icon"}
                height={50}
                width={50}
                className="h-auto w-6 "
              />
              Sustainable travel experiences that respect local culture and the
              environment.
            </li>
          </ul>
          <a
            href="#"
            className="mt-6 rounded-lg px-6 py-3 inline-block text-white bg-blue-950 font-semibold"
          >
            Read More  &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
