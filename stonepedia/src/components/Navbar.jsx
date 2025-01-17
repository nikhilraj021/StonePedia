import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import SubNavbar from "./SubNavbar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isHovered ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="p-4 space-y-4">
        <div>
          <div className="flex justify-between items-center">
            {isScrolled || isHovered ? (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/logoo-1.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            ) : (
              <img
                src="https://stonepedia.in/wp-content/uploads/2024/10/white-logo.png"
                alt="stonepedia-logo"
                className="w-40"
              />
            )}

            <ul
              className={`hidden md:flex space-x-2 lg:space-x-8 font-semibold ${
                isScrolled || isHovered ? "text-black" : "text-gray-200"
              } text-sm`}
            >
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
                  className="hover:text-orange-500 hover:underline underline-offset-4"
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
                  className="hover:text-orange-500 hover:underline underline-offset-4"
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
                  className="hover:text-orange-500 hover:underline underline-offset-4"
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
                  className="hover:text-orange-500 hover:underline underline-offset-4"
                >
                  CONTACT
                </a>
              </motion.li>

              <Link to="/login">
                <li className="bg-orange-500 px-2 rounded-xl">
                  <a
                    href="#"
                    className="hover:text-black "
                  >
                    LOGIN
                  </a>
                </li>
              </Link>

              <Link to="/signup">
                <li className="bg-orange-500 px-2 rounded-xl">
                  <a
                    href="#"
                    className="hover:text-black"
                  >
                    SIGNUP
                  </a>
                </li>
              </Link>
            </ul>

            <span
              onClick={toggleMenu}
              className="cursor-pointer md:hidden text-white"
            >
              <RxHamburgerMenu size={28} />
            </span>
          </div>

          {isScrolled ? (
            ""
          ) : (
            <SubNavbar
              isHovered={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-14 left-0 md:hidden bg-white shadow-md w-48 px-4 z-50 border-t-2 rounded-br-xl transition-all duration-500 ease-out-in ${
            isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}
        >
          <ul className="flex flex-col items-center space-y-4 my-2">
            {[
              "Home",
              "About Us",
              "Services",
              "Contact",
              "SHOP BY CATEGORY",
              "PARTNER WITH US",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-black font-semibold"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
