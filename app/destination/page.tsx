import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full  mt-20">
      <div className="relative w-full h-[40vh] md:h-[60vh]">
        <Image
          src="/wild4.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=" w-full h-[500px]"
        />
      </div>
      <div className="max-w-xl  md:max-w-7xl flex flex-col md:flex-row  m-auto py-10 px-4 md:px-6">
        <Image
          src="/wild4.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="rounded-t-lg  object-cover"
        />
        <div className="w-1/2 "></div>
      </div>
    </div>
  );
};

export default page;
