"use client";
import React, { useState } from "react";
import { Globe, ChevronDown, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_Link } from "@/constant";

const destinations = [
  {
    name: "Colombo",
    activities: ["City Tours", "Temple Visits", "Shopping Districts"],
  },
  {
    name: "Kandy",
    activities: ["Temple of Tooth", "Botanical Gardens", "Cultural Shows"],
  },
  {
    name: "Galle",
    activities: ["Fort Walking Tour", "Beach Activities", "Historical Sites"],
  },
  {
    name: "Ella",
    activities: ["Train Rides", "Nine Arch Bridge", "Little Adams Peak"],
  },
  {
    name: "Yala",
    activities: ["Wildlife Safaris", "Bird Watching", "Camping"],
  },
];

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [activeDestination, setActiveDestination] = useState(destinations[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="flex justify-between max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt={"logo"}
              width={300}
              height={250}
              className="  w-36 "
            />
          </Link>
        </div>

        <div className="w-full">
          {/* Top Bar */}
          <div className="border-b border-gray-100">
            <div className="flex justify-end items-center py-2 px-4 space-x-4">
              <a
                href="mailto:info@srilanka.com"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Mail className="h-4 w-4" />
                <span>info@srilanka.com</span>
              </a>
              <a
                href="tel:+94123456789"
                className="flex items-center gap-1 hover:text-blue-600"
              >
                <Phone className="h-4 w-4" />
                <span>+94 12 345 6789</span>
              </a>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
          <Globe className="h-4 w-4" />
          <span>EN</span>
        </button>
              
            </div>
          </div>
          <div className="relative flex justify-between px-4 py-2">
            {/* Desktop Navigation */}
            <div className="hidden  md:flex items-center justify-center w-full space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>

              <div className=" group ">
                <button
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Tours <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg  p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="flex">
                    <div className="w-1/2 border-r border-gray-200">
                      <h3 className="font-semibold mb-4">
                        Popular Destinations
                      </h3>
                      {destinations.map((dest) => (
                        <button
                          key={dest.name}
                          className={`block w-full text-left px-4 py-2 rounded-lg ${
                            activeDestination.name === dest.name
                              ? "bg-blue-50 text-blue-600"
                              : "hover:bg-gray-50"
                          }`}
                          onMouseEnter={() => setActiveDestination(dest)}
                        >
                          {dest.name}
                        </button>
                      ))}
                    </div>
                    <div className="w-1/2 pl-6">
                      <h3 className="font-semibold mb-4">
                        Things to Do in {activeDestination.name}
                      </h3>
                      <ul className="space-y-2">
                        {activeDestination.activities.map((activity) => (
                          <li
                            key={activity}
                            className="hover:text-blue-600 cursor-pointer"
                          >
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" className="text-gray-700 hover:text-blue-600">
                Things to Do
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Travel Guide
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Hotels
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Offers
              </a>
            </div>

            <Link href="/contact-us">
              <button className=" hidden lg:block bg-[#003366] px-5 py-2 text-white w-36 rounded-md hover:bg-[#004080] ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*MOBILE */}
      {!menuOpened ? (
        <Image
          src="menu.svg"
          alt="menuicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="close.svg"
          alt="menuicon"
          width={28}
          height={28}
          className="lg:hidden inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      )}
      <ul
        className={
          menuOpened
            ? "flex flex-col justify-center p-12 fixed top-20 right-0 bg-slate-50 rounded-lg transition-all duration-500 shadow-md"
            : "flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-50 rounded-lg transition-all duration-500 shadow-md"
        }
      >
        {NAV_Link.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex gap-1 m-4 relative text-gray-700 group "
          >
            <Image
              src={link.iconURL}
              alt={link.label}
              height={20}
              width={20}
              className="h-auto w-4"
            />
            {link.label}
            <span className="inline-block absolute -bottom-2 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
