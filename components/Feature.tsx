"use client";
import React from "react";
import Slider from "react-slick";
import { FEATURE } from "@/constant";
import FeatureItem from "./FeatureItem";
import Link from 'next/link';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

interface ArrowProps {
  onClick?: () => void;
}

const Feature = () => {
 
  const NextArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="text-3xl bg-white p-2 rounded-full inline-block shadow-md absolute top-1/2 -right-3 z-10 hover:bg-slate-100"
      >
        <RiArrowRightSLine />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="text-3xl bg-white p-2 rounded-full inline-block shadow-md absolute top-1/2 -left-3 z-10 hover:bg-slate-100"
      >
        <RiArrowLeftSLine />
      </div>
    );
  };

  const settings = {
    arrow: true,
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="max-w-7xl m-auto p-12 px-5">
      <div>
        <h3 className="text-3xl lg:text-5xl font-semibold text-center text-[#003366] ">
          Featured Destination
        </h3>
      </div>
      <div className="pt-16">
        <Slider {...settings}>
          {FEATURE.map((feature) => (
            <Link href="/destination" key={feature.title}>
              <FeatureItem
                title={feature.title}
                URL={feature.URL}
                des={feature.des}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Feature;
