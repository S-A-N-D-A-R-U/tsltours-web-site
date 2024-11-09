"use client";
import { useState } from "react";
import { PACKAGES } from "@/constant";
import React from "react";
import Image from "next/image";
import PackageItem from "./PackageItem";

const TourPackages = () => {
  const [activeTab, setActiveTab] = useState<"Popular" | "Luxury" | "Wellness">(
    "Popular"
  );

  const tabData = {
    Popular: { themeColor: "bg-blue-500", packages: PACKAGES },
    Luxury: { themeColor: "bg-violet-500", packages: PACKAGES },
    Wellness: { themeColor: "bg-green-500", packages: PACKAGES },
  };

  return (
    <div className="w-full max-w-screen-xl   mx-auto">
      {/* Tab Navigation */}
      <div className="flex  justify-center space-x-4 mb-6">
        {["Popular", "Luxury", "Wellness"].map((tab) => (
          <button
            key={tab}
            onClick={() =>
              setActiveTab(tab as "Popular" | "Luxury" | "Wellness")
            }
            className={`py-2 px-[10%]  font-semibold ${
              activeTab === tab ? "border-b-4" : ""
            } ${
              tabData[tab as keyof typeof tabData].themeColor
            } text-white rounded-md`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <section className="max-w-screen-xl mx-auto bg-slate-50  px-8 lg:px-24">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#003366] mb-12">
          Most Popular Tour Packages
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tabData[activeTab].packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white max-w-96 rounded-lg shadow-lg  hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={500}
                height={300}
                className="rounded-t-lg  object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-sm h-20 overflow-hidden">{pkg.des}</p>
                <p className="text-2xl font-bold text-[#003366] mb-2 ">
                  ${pkg.price}.00/Person
                </p>
                <hr className="mb-2" />
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-center text-lg">
                    {pkg.duration}
                  </p>
                  <button className=" bg-[#003366] text-white px-4 py-2 rounded-md hover:bg-[#002244] transition-all">
                    More Details &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className=" mt-10 mb-6 bg-[#003366] text-white px-4 py-2 rounded-md hover:bg-[#002244] transition-all">
            View All Tours&rarr;
          </button>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;
