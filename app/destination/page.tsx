import React from "react";
import Image from "next/image";

const DestinationPage = () => {
  return (
    <div className="relative w-full max-w-7xl mx-auto  mt-20">
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/destination/kandy/1.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=" w-full h-[500px]"
        />
      </div>
      <div className="text-center py-6">
          <h1 className="text-5xl font-bold pb-3">Discover Kandy</h1>
          <h2 className="text-3xl font-semibold">A Cultural Gem in the Heart of Sri Lanka</h2>
      </div>
      <div className="max-w-xl   md:max-w-7xl flex flex-col md:flex-row md:gap-9 mx-auto py-10 px-4 md:px-6">
        <div className="w-1/2 p-3 "><Image
          src="/destination/kandy/2.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg w-full h-[60vh] object-cover"
        /></div>
        
        <div className="w-1/2 p-3 ">
          <h3 className="text-lg font-semibold py-3">A Cultural Gem in the Heart of Sri Lanka</h3>
          <p>
            Known as the cultural capital of Sri Lanka, Kandy offers a rich
            blend of heritage, stunning landscapes, and spiritual experiences.
            Nestled among misty hills, this vibrant city is home to the revered
            Temple of the Tooth and is renowned for its colorful festivals and
            scenic beauty.Key Points: Famous for the Temple of the Tooth. Annual
            Esala Perahera festival. Located in the Central Province of Sri
            Lanka. Best time to visit: December to April.
          </p>
        </div>
      </div>
      <div className="max-w-xl   md:max-w-7xl flex flex-col md:flex-row-reverse md:gap-9 mx-auto py-10 px-4 md:px-6">
        <div className="w-1/2 p-3 "><Image
          src="/destination/kandy.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-lg w-full h-[60vh] object-cover"
        /></div>
        
        <div className="w-1/2 p-3 ">
          <h3 className="text-lg font-semibold py-3">A Cultural Gem in the Heart of Sri Lanka</h3>
          <p>
            Known as the cultural capital of Sri Lanka, Kandy offers a rich
            blend of heritage, stunning landscapes, and spiritual experiences.
            Nestled among misty hills, this vibrant city is home to the revered
            Temple of the Tooth and is renowned for its colorful festivals and
            scenic beauty.Key Points: Famous for the Temple of the Tooth. Annual
            Esala Perahera festival. Located in the Central Province of Sri
            Lanka. Best time to visit: December to April.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
