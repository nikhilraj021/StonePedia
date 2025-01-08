import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-black z-50">
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center  shadow-md">
          <img
            src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png "
            alt="stonepedia-logo"
            className="w-40"
          />
          {/* https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png */}

          <ul className="hidden md:flex space-x-2 lg:space-x-8 font-semibold text-gray-200 text-sm">
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className=" hover:text-white hover:underline underline-offset-4"
              >
                HOME
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4 "
              >
                ABOUT US
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4"
              >
                SERVICES
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4"
              >
                CONTACT
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4"
              >
                SHOP BY CATEGORY
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 5,
              }}
            >
              <a
                href="#"
                className="hover:text-white hover:underline underline-offset-4"
              >
                PARTNER WITH US
              </a>
            </motion.li>
          </ul>

          <span onClick={toggleMenu} className="cursor-pointer md:hidden">
            <RxHamburgerMenu size={28} />
          </span>
        </div>

        <div className="flex justify-between">
          <ul className="flex gap-5">
            <li className="text-white flex items-center">
              <span><RxHamburgerMenu /></span>
              All Categories
            </li>
            <li className="text-white">
              Featured Sections
            </li>
            <li className="text-white">
              Partner With Us
            </li>
          </ul>

          <ul className="flex gap-5">
            <li className="text-white flex items-center">
              <span><RxHamburgerMenu /></span>
              All Categories
            </li>
            <li className="text-white">
              Featured Sections
            </li>
            <li className="text-white">
              Partner With Us
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 md:hidden bg-white shadow-md w-48 p-4 z-50 border-t-2 rounded-br-xl transition-all duration-500 ease-out-in ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              SHOP BY CATEGORY
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-700 hover:text-black font-semibold"
            >
              PARTNER WITH US
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
