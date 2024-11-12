"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_Link } from "@/constant";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <nav className="flex justify-between items-center bg-white w-full fixed shadow-md px-12 py-3  z-50 lg:px-24">
      <Link href="/">
      <Image
        src={"/logo.png"}
        alt={"logo"}
        width={300}
        height={250}
        className="  w-36 "
      />
      </Link>
      <ul className="hidden lg:flex h-full">
        {NAV_Link.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="flex items-center justify-center gap-2 mx-8 relative text-gray-700 group "
          >
            {link.label}
            <span className="inline-block absolute -bottom-2 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
          </Link>
        ))}
      </ul>
      <Link href="/contact-us">
        <button className=" hidden lg:block bg-[#003366] px-5 py-2 text-white  rounded-md hover:bg-[#004080] ">
          Contact Us
        </button>
      </Link>

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
      <ul className={menuOpened ? "flex flex-col justify-center p-12 fixed top-20 right-0 bg-slate-50 rounded-lg transition-all duration-500 shadow-md" : "flex flex-col justify-center p-12 fixed top-14 right-[-100%] bg-slate-50 rounded-lg transition-all duration-500 shadow-md" }>
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
