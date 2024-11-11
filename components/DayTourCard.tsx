import React from "react";
import Image from "next/image";

type DayTourCard = {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
};

const DayTourCard = ({
  id,
  title,
  imageUrl,
  description,
  price,
}: DayTourCard) => {
  return (
    <div className="bg-white flex flex-col h-full justify-between shadow-md border-[1px] border-black rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ">
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={500}
          height={200}
          className="  h-52  object-cover"
        />
        <div className="p-4  ">
          <div className="  overflow-y-clip">
            <h3 className="font-bold text-md">{title}</h3>
            <p className="text-gray-600 text-sm py-1  font-semibold ">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center px-4 pb-4">
        <h3 className="text-center text-sm text-orange-600">
          From <span className="font-bold text-lg">{price}</span>
        </h3>
        <button className="mt-auto px-3 py-2 bg-blue-600 text-white rounded text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default DayTourCard;
