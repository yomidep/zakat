"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navLinks } from "../app/constants";
import { styles } from "@/app/styles";
import { logo, menu, close } from "../public/assets";
import Image from "next/image";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } bg-white w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-gray-700 text-[18px] font-semibold cursor-pointer flex ">
            Zakat
            <span className="font-light "> Chain</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-5 justify-center items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-gray-800" : "text-secondary"
              } hover:text-gray-500 text-[13px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
              <div class="  text-left">
                <div>
                  <button
                    type="button"
                    class="inline-flex justify-center gap-x-0 rounded-md bg-white px-3 py-2 text-sm font-light text-gray-600 shadow-sm hover:bg-gray-50"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    {nav.title}
                    <svg
                      class="-mr-1 h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  class="absolute hidden right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li>
            <button className="bg-[#915EFF] text-white px-2 py-2 rounded-lg font-bold text-[13px] m-0">
              Connect Wallet
            </button>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          /> */}
          {toggle ? (
            <AiOutlineClose size={20} onClick={() => setToggle(!toggle)} />
          ) : (
            <AiOutlineMenu size={20} onClick={() => setToggle(!toggle)} />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 white-glassmorphism absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[13px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
