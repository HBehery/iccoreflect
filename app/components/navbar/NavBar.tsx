"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex bg-white border-b border-gray-200 py-3 justify-center">
      <div className="container flex justify-between items-center min-w-full">
        <Link href="/" className="flex items-center pl-3 lg:pl-9">
          <Image src="/logo.svg" alt="ICCO Logo" width={250} height={250} />
        </Link>
        <div className="hidden md:flex space-x-8 transition-all duration-300 text-gray-800 font-medium">
          <Link
            href="/quizzes"
            className="hover:text-[#3f7d76] hover:underline hover:underline-offset-4 hover:decoration-[#3f7d76]"
          >
            Quizzes
          </Link>
          <Link
            href="/leaderboard"
            className="hover:text-[#3f7d76] hover:underline hover:underline-offset-4 hover:decoration-[#3f7d76]"
          >
            Leaderboard
          </Link>
        </div>
        <div className="hidden md:flex pl-[6%] pr-4 lg:pr-12">
          <Link
            href="https://donations.macnet.ca/donation-cause?centre=19"
            className="bg-[#c7574b] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-[#c7574b] right-3 font-bold border-4 border-[#c7574b] transition-colors duration-300"
          >
            DONATE
          </Link>
        </div>
        <div className="md:hidden pr-4 lg:pr-12">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none hover:text-neutral-500 cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-neutral-800/70 bg-opacity-75 z-50 flex justify-end text-white transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-[#3f7d76] w-82 h-full py-4 px-2 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-16">
            <div className="flex flex-row justify-between items-center">
              <Image
                src="/logo.svg"
                alt="ICCO Logo"
                width={250}
                height={250}
                className="brightness-100000"
              />
              <button
                onClick={toggleMenu}
                className="mb-1 focus:outline-none pr-2 hover:text-neutral-300 cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <nav className="flex flex-col space-y-4 ">
              <div className="flex flex-col space-y-4 pl-5 pr-3">
                <Link
                  href="/quizzes"
                  className="font-medium hover:text-[#dfdfdf]"
                >
                  Quizzes
                </Link>
                <hr className="border-t border-white" />
                <Link
                  href="/leaderboard"
                  className="font-medium hover:text-[#dfdfdf]"
                >
                  Leaderboard
                </Link>
                <hr className="border-t border-white" />
              </div>
            </nav>
            <div className="flex flex-col mx-24 text-center py-8">
              <Link
                href="https://donations.macnet.ca/donation-cause?centre=19"
                className="bg-[#c7574b] text-white py-2 rounded-lg hover:bg-white hover:text-[#c7574b] font-bold border-4 border-[#c7574b] transition-colors duration-300"
              >
                DONATE
              </Link>
              <div className="flex flex-row gap-6 justify-center mt-4 transition-colors py-4">
                <a
                  href="https://www.facebook.com/ICCOMAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800/30 hover:bg-neutral-800/50 text-[#3f7d76] p-2 rounded-full"
                >
                  <FaFacebook size={24} fill="white" />
                </a>
                <a
                  href="https://www.instagram.com/icco_mac/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800/30 hover:bg-neutral-800/50 text-[#3f7d76] p-2 rounded-full"
                >
                  <FaInstagram size={24} fill="white" />
                </a>
                <a
                  href="https://chat.whatsapp.com/JjI64mxwgwz7WApWuwyMvO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800/30 hover:bg-neutral-800/50 text-[#3f7d76] p-2 rounded-full"
                >
                  <FaWhatsapp size={24} fill="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
