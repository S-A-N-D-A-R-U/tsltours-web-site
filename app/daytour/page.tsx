import React from "react";
import Image from "next/image";
import { DayTours } from "@/constant";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
            {DayTours.info?.title}
          </h3>
          <h3 className=" text-sm mb-5 md:text-xl p-2 bg-black text-white inline">
            {DayTours.info?.day}
          </h3>
          <p className=" text-sm mt-2 md:mt-4 py-2 lg:text-lg">
            {DayTours.info?.des}
          </p>
        </div>
        <div className="flex flex-col md:w-1/4 justify-center items-center md:items-stretch md:justify-normal">
          <h3 className="font-bold text-blue-700 text-2xl mb-5 ">
            {DayTours.info?.price}
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
          <h3 className="font-semibold text-xl mb-2">Highlights</h3>
          <div className="flex flex-col md:flex-row gap-1">
            <div className="w-full flex flex-col gap-1">
              {DayTours.Highlights?.map((item) => (
                <div className="flex flex-row items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className=" max-w-7xl m-auto mb-10  w-full border-2  border-blue-950 rounded-md p-5">
          <h3 className="font-semibold text-xl mb-2">Included with tour</h3>
          <div className="flex flex-col md:flex-row gap-1">
            <div className="w-full flex flex-col gap-1">
              {DayTours.Includes?.include?.map((item) => (
                <div className="flex flex-row items-center gap-2">
                  <Image
                src={"/bx-check-circle-green.svg"}
                alt={"bx-check-circle-green icon"}
                height={50}
                width={50}
                className="h-auto w-6"
              />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col gap-1">
            {DayTours.Includes?.notInclude?.map((item) => (
                <div className="flex flex-row items-center gap-2">
                  <Image
                src={"/close-circle-svgrepo-com.svg"}
                alt={"close-circle icon"}
                height={50}
                width={50}
                className="h-auto w-5"
              />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" relative max-w-7xl m-auto  ">
        <div className=" hidden md:block absolute border-l-2 border-dotted border-gray-500 h-full mx-4"></div>
      </div>
      <div className="max-w-7xl m-auto md:mt-10">
        <h1 className=" text-3xl text-gray-600 font-semibold lg:text-5xl text-center my-8 py-8">
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
