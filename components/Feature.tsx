"use client"
import React from "react";
import Slider from "react-slick";
import { FEATURE } from "@/constant";
import FeatureItem from "./FeatureItem";
import Link from 'next/link';
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Feature = () => {
 
  const NextArrow = (props: any) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className="text-3xl bg-white p-2  rounded-full inline-block shadow-md absolute top-1/2 -right-3 z-10 hover:bg-slate-100"><RiArrowRightSLine/></div>
    )

  };
  const PrevArrow = (props: any) => {
    const {onClick} = props;
    return(
      <div onClick={onClick} className="text-3xl bg-white p-2 rounded-full inline-block shadow-md absolute top-1/2 -left-3 z-10 hover:bg-slate-100"><RiArrowLeftSLine/></div>
    )

  };
  

  var settings = {
    arrow: true,
    autoplay: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
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
    ]
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
        {
          FEATURE.map((feature) => (
            <Link href="/destination"><FeatureItem
            key={feature.title}
            title={feature.title}
            URL = {feature.URL}
            des={feature.des}
            /></Link>
            
          ))
        }
        </Slider>
      </div>
    </section>
  );
};

export default Feature;
