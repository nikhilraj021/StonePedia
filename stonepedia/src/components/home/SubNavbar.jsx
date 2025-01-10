import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const SubNavbar = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`hidden md:flex justify-between mt-2 `}>
      <ul
        className="flex gap-5 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li
          className={`flex items-center gap-2 cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          <span>
            <RxHamburgerMenu />
          </span>
          All Categories
        </li>
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          Shop
        </li>
      </ul>

      <ul
        className="flex gap-2 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          Shop
        </li>
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          Shop
        </li>
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          }`}
        >
          Shop
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
