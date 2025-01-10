import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="p-4 space-y-4">
        <div>
          <div className="flex justify-between items-center">
            {isScrolled ? (
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
                isScrolled ? "text-black" : "text-gray-200"
              } text-sm`}
            >
              {[
                "HOME",
                "ABOUT US",
                "SERVICES",
                "CONTACT",
                "SHOP BY CATEGORY",
                "PARTNER WITH US",
              ].map((item, index) => (
                <motion.li
                  key={index}
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
                    {item}
                  </a>
                </motion.li>
              ))}
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
            <div className="text-white hidden md:flex justify-between mt-2">
              <ul className="flex gap-5">
                <li className="flex items-center gap-2">
                  <span>
                    <RxHamburgerMenu />
                  </span>
                  All Categories
                </li>
                <li>All Categories</li>
              </ul>

              <ul className="flex ">
                <li>All Categories</li>
                <li>All Categories</li>

                <li>All Categories</li>
              </ul>
            </div>
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
