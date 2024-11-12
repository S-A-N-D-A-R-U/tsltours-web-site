import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-white flex flex-col h-full justify-between  border-[1px]  border-slate-300 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl  shadow-md shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
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
        <Link href={`/daytour/${id}`}><button className="mt-auto px-3 py-2 bg-[#003366] text-white rounded text-sm">
          View Details
        </button></Link>
        
      </div>
    </div>
  );
};

export default DayTourCard;
