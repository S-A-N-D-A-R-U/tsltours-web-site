import React from "react";
import Image from "next/image";
import Link from 'next/link';


type TourPackageItemcard = {
  id: string;
  imageUrl: string;
  title: string;
  price: string;
  description: string;
  duration: string;
};
const TourPackageItemcard = ({
  id,
  title,
  imageUrl,
  price,
  description,
  duration,
}: TourPackageItemcard) => {
  return (
    <div className="bg-white max-w-80 rounded-lg shadow-lg m-auto hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="rounded-t-lg  object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm h-20 overflow-hidden">{description}</p>
        <p className="text-2xl font-bold text-[#003366] mb-2 ">
          {price}.00/Person
        </p>
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-center text-lg">{duration}</p>
          <Link href={`/tour-packages/${id}`}><button className=" bg-[#003366] text-white px-4 py-2 rounded-md hover:bg-[#002244] transition-all">
            More Details &rarr;
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default TourPackageItemcard;
