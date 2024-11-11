import { PACKAGES } from "@/constant";
import React from "react";
import TourPackageItemcard from "./TourPackageItemcard";


const TourPackages = () => {

  return (
    <div className="w-full max-w-screen-xl   mx-auto">
      <section className="max-w-screen-xl mx-auto bg-slate-50  px-24 ">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#003366] mb-12">
          Most Popular Tour Packages
        </h2>
        <div className="grid grid-cols-1  md:grid-cols-3  lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
          <TourPackageItemcard
          id={pkg.id}
          title={pkg.title}
          imageUrl={pkg.imageUrl}
          price={pkg.price}
          description={pkg.description}
          duration={pkg.duration}
          />
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
