import { WILDLIFE } from "@/constant";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="relative w-full  mt-20">
      <div className="relative w-full h-[40vh] md:h-[65vh]">
        <Image
          src="/Tiger (1).jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=" w-full h-72"
        />
      </div>
      <div className="max-w-xl  md:max-w-7xl flex flex-col p-5  md:flex-row md:justify-between m-auto md:py-10  ">
        <div className="md:pr-10 md:w-3/4 ">
          <h3 className=" font-bold text-lg sm:text-2xl mb-5 text-center md:text-left  md:text-4xl ">
            {WILDLIFE.info?.title}
          </h3>
          <h3 className=" text-sm mb-5 md:text-xl p-2 bg-black text-white inline">
            {WILDLIFE.info?.day}
          </h3>
          <p className=" text-sm mt-2 md:mt-4 py-2 lg:text-lg">
            {WILDLIFE.info?.des}
          </p>
        </div>
        <div className="flex flex-col md:w-1/4 justify-center items-center md:items-stretch md:justify-normal">
          <h3 className="font-bold text-blue-700 text-2xl mb-5 ">
            {WILDLIFE.info?.price}
          </h3>
          <button className="bg-blue-950 py-4 text-white rounded-lg px-10">
            Inquire Now
          </button>
          <div className="my-5">
            <div className="flex flex-row gap-3 py-4">
              <Image
                src={"/destination.png"}
                alt={"destination icon"}
                height={50}
                width={50}
                className="h-auto w-6 md:w-8"
              />
              <p>14 excursions & visits</p>
            </div>
            <div className="flex flex-row gap-3">
              <Image
                src={"/meals.png"}
                alt={"meals icon"}
                height={50}
                width={50}
                className="h-auto w-6 md:w-8"
              />
              <p>23 meals</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
      <div className=" max-w-7xl m-auto mb-10  w-full border-2  border-blue-950 rounded-md p-5">
        <h3 className="font-semibold text-xl mb-2">Included with tour</h3>
        <div className="flex flex-col md:flex-row gap-1">
          <div className="w-full flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-950"></div>
              <p>VIP door-to-door travel service</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-950"></div>
              <p>Selected meals and international flights</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-950"></div>
              <p>Knowledgeable tour managers</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-950"></div>
              <p>Included excursions</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" relative max-w-7xl m-auto  ">
        <div className=" hidden md:block absolute border-l-2 border-dotted border-gray-500 h-full mx-4"></div>

        <h1 className=" text-3xl lg:text-5xl text-gray-600 font-semibold text-center md:my-11">
          ITINERARY
        </h1>

        {WILDLIFE.itinerary?.map((item, index) => (
          <div key={index}>
            <div className="w-full max-w-lg md:max-w-7xl md:mt-8 flex flex-col md:flex-row md:justify-evenly mx-auto p-5">
              <h3 className=" md:p-2 lg:p-5  hidden md:block text-xl md:text-xl lg:text-3xl font-bold text-center md:min-w-32">
                {"DAY " + item.day}
              </h3>
              <div
                className={`flex flex-col items-center md:items-start md:flex-row max-w-5xl gap-1 md:gap-5  ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-5/12 w-full ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className=" rounded-md object-cover "
                  />
                </div>
                <div
                  className={` w-full md:w-7/12 h-full rounded-md px-4 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`}
                >
                  <div>
                    <h3 className=" font-bold text-lg sm:text-xl p-2">{item.title}</h3>
                    <hr />
                    <p className="p-2">{item.des}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl m-auto md:mt-10">
        <h1 className=" text-3xl text-gray-600 font-semibold lg:text-5xl text-center my-8 ">
          TOUR MAP
        </h1>
        <Image
                src={"/map.png"}
                alt={"destination icon"}
                height={500}
                width={500}
                className="h-auto w-3/4 m-auto "
              />

      </div>
    </div>
  );
};

export default page;
