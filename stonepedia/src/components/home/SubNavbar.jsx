import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const SubNavbar = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  const [isCategoriesHovered, setIsCategoriesHovered] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false); 
  const [hoveredCategory, setHoveredCategory] = useState(0);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(0);
  const [hoveredSubSubcategory, setHoveredSubSubcategory] = useState(0);

  const categories = [
    {
      name: "Category 1",
      subcategories: [
        {
          name: "Subcategory 1.1",
          subsubcategories: [
            "Sub-subcategory 1.1.1",
            "Sub-subcategory 1.1.2",
            "Sub-subcategory 1.1.3",
            "Sub-subcategory 1.1.4",
            "Sub-subcategory 1.1.5",
          ],
        },
        {
          name: "Subcategory 1.2",
          subsubcategories: [
            "Sub-subcategory 1.2.1",
            "Sub-subcategory 1.2.2",
            "Sub-subcategory 1.2.3",
            "Sub-subcategory 1.2.4",
            "Sub-subcategory 1.2.5",
          ],
        },
        {
          name: "Subcategory 1.3",
          subsubcategories: [
            "Sub-subcategory 1.3.1",
            "Sub-subcategory 1.3.2",
            "Sub-subcategory 1.3.3",
            "Sub-subcategory 1.3.4",
            "Sub-subcategory 1.3.5",
          ],
        },
        {
          name: "Subcategory 1.4",
          subsubcategories: [
            "Sub-subcategory 1.4.1",
            "Sub-subcategory 1.4.2",
            "Sub-subcategory 1.4.3",
            "Sub-subcategory 1.4.4",
            "Sub-subcategory 1.4.5",
          ],
        },
        {
          name: "Subcategory 1.5",
          subsubcategories: [
            "Sub-subcategory 1.5.1",
            "Sub-subcategory 1.5.2",
            "Sub-subcategory 1.5.3",
            "Sub-subcategory 1.5.4",
            "Sub-subcategory 1.5.5",
          ],
        },
        {
          name: "Subcategory 1.6",
          subsubcategories: [
            "Sub-subcategory 1.6.1",
            "Sub-subcategory 1.6.2",
            "Sub-subcategory 1.6.3",
            "Sub-subcategory 1.6.4",
            "Sub-subcategory 1.6.5",
          ],
        },
        {
          name: "Subcategory 1.7",
          subsubcategories: [
            "Sub-subcategory 1.7.1",
            "Sub-subcategory 1.7.2",
            "Sub-subcategory 1.7.3",
            "Sub-subcategory 1.7.4",
            "Sub-subcategory 1.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 2",
      subcategories: [
        {
          name: "Subcategory 2.1",
          subsubcategories: [
            "Sub-subcategory 2.1.1",
            "Sub-subcategory 2.1.2",
            "Sub-subcategory 2.1.3",
            "Sub-subcategory 2.1.4",
            "Sub-subcategory 2.1.5",
          ],
        },
        {
          name: "Subcategory 2.2",
          subsubcategories: [
            "Sub-subcategory 2.2.1",
            "Sub-subcategory 2.2.2",
            "Sub-subcategory 2.2.3",
            "Sub-subcategory 2.2.4",
            "Sub-subcategory 2.2.5",
          ],
        },
        {
          name: "Subcategory 2.3",
          subsubcategories: [
            "Sub-subcategory 2.3.1",
            "Sub-subcategory 2.3.2",
            "Sub-subcategory 2.3.3",
            "Sub-subcategory 2.3.4",
            "Sub-subcategory 2.3.5",
          ],
        },
        {
          name: "Subcategory 2.4",
          subsubcategories: [
            "Sub-subcategory 2.4.1",
            "Sub-subcategory 2.4.2",
            "Sub-subcategory 2.4.3",
            "Sub-subcategory 2.4.4",
            "Sub-subcategory 2.4.5",
          ],
        },
        {
          name: "Subcategory 2.5",
          subsubcategories: [
            "Sub-subcategory 2.5.1",
            "Sub-subcategory 2.5.2",
            "Sub-subcategory 2.5.3",
            "Sub-subcategory 2.5.4",
            "Sub-subcategory 2.5.5",
          ],
        },
        {
          name: "Subcategory 2.6",
          subsubcategories: [
            "Sub-subcategory 2.6.1",
            "Sub-subcategory 2.6.2",
            "Sub-subcategory 2.6.3",
            "Sub-subcategory 2.6.4",
            "Sub-subcategory 2.6.5",
          ],
        },
        {
          name: "Subcategory 2.7",
          subsubcategories: [
            "Sub-subcategory 2.7.1",
            "Sub-subcategory 2.7.2",
            "Sub-subcategory 2.7.3",
            "Sub-subcategory 2.7.4",
            "Sub-subcategory 2.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          subsubcategories: [
            "Sub-subcategory 3.1.1",
            "Sub-subcategory 3.1.2",
            "Sub-subcategory 3.1.3",
            "Sub-subcategory 3.1.4",
            "Sub-subcategory 3.1.5",
          ],
        },
        {
          name: "Subcategory 3.2",
          subsubcategories: [
            "Sub-subcategory 3.2.1",
            "Sub-subcategory 3.2.2",
            "Sub-subcategory 3.2.3",
            "Sub-subcategory 3.2.4",
            "Sub-subcategory 3.2.5",
          ],
        },
        {
          name: "Subcategory 3.3",
          subsubcategories: [
            "Sub-subcategory 3.3.1",
            "Sub-subcategory 3.3.2",
            "Sub-subcategory 3.3.3",
            "Sub-subcategory 3.3.4",
            "Sub-subcategory 3.3.5",
          ],
        },
        {
          name: "Subcategory 3.4",
          subsubcategories: [
            "Sub-subcategory 3.4.1",
            "Sub-subcategory 3.4.2",
            "Sub-subcategory 3.4.3",
            "Sub-subcategory 3.4.4",
            "Sub-subcategory 3.4.5",
          ],
        },
        {
          name: "Subcategory 3.5",
          subsubcategories: [
            "Sub-subcategory 3.5.1",
            "Sub-subcategory 3.5.2",
            "Sub-subcategory 3.5.3",
            "Sub-subcategory 3.5.4",
            "Sub-subcategory 3.5.5",
          ],
        },
        {
          name: "Subcategory 3.6",
          subsubcategories: [
            "Sub-subcategory 3.6.1",
            "Sub-subcategory 3.6.2",
            "Sub-subcategory 3.6.3",
            "Sub-subcategory 3.6.4",
            "Sub-subcategory 3.6.5",
          ],
        },
        {
          name: "Subcategory 3.7",
          subsubcategories: [
            "Sub-subcategory 3.7.1",
            "Sub-subcategory 3.7.2",
            "Sub-subcategory 3.7.3",
            "Sub-subcategory 3.7.4",
            "Sub-subcategory 3.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 4",
      subcategories: [
        {
          name: "Subcategory 4.1",
          subsubcategories: [
            "Sub-subcategory 4.1.1",
            "Sub-subcategory 4.1.2",
            "Sub-subcategory 4.1.3",
            "Sub-subcategory 4.1.4",
            "Sub-subcategory 4.1.5",
          ],
        },
        {
          name: "Subcategory 4.2",
          subsubcategories: [
            "Sub-subcategory 4.2.1",
            "Sub-subcategory 4.2.2",
            "Sub-subcategory 4.2.3",
            "Sub-subcategory 4.2.4",
            "Sub-subcategory 4.2.5",
          ],
        },
        {
          name: "Subcategory 4.3",
          subsubcategories: [
            "Sub-subcategory 4.3.1",
            "Sub-subcategory 4.3.2",
            "Sub-subcategory 4.3.3",
            "Sub-subcategory 4.3.4",
            "Sub-subcategory 4.3.5",
          ],
        },
        {
          name: "Subcategory 4.4",
          subsubcategories: [
            "Sub-subcategory 4.4.1",
            "Sub-subcategory 4.4.2",
            "Sub-subcategory 4.4.3",
            "Sub-subcategory 4.4.4",
            "Sub-subcategory 4.4.5",
          ],
        },
        {
          name: "Subcategory 4.5",
          subsubcategories: [
            "Sub-subcategory 4.5.1",
            "Sub-subcategory 4.5.2",
            "Sub-subcategory 4.5.3",
            "Sub-subcategory 4.5.4",
            "Sub-subcategory 4.5.5",
          ],
        },
        {
          name: "Subcategory 4.6",
          subsubcategories: [
            "Sub-subcategory 4.6.1",
            "Sub-subcategory 4.6.2",
            "Sub-subcategory 4.6.3",
            "Sub-subcategory 4.6.4",
            "Sub-subcategory 4.6.5",
          ],
        },
        {
          name: "Subcategory 4.7",
          subsubcategories: [
            "Sub-subcategory 4.7.1",
            "Sub-subcategory 4.7.2",
            "Sub-subcategory 4.7.3",
            "Sub-subcategory 4.7.4",
            "Sub-subcategory 4.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 5",
      subcategories: [
        {
          name: "Subcategory 5.1",
          subsubcategories: [
            "Sub-subcategory 5.1.1",
            "Sub-subcategory 5.1.2",
            "Sub-subcategory 5.1.3",
            "Sub-subcategory 5.1.4",
            "Sub-subcategory 5.1.5",
          ],
        },
        {
          name: "Subcategory 5.2",
          subsubcategories: [
            "Sub-subcategory 5.2.1",
            "Sub-subcategory 5.2.2",
            "Sub-subcategory 5.2.3",
            "Sub-subcategory 5.2.4",
            "Sub-subcategory 5.2.5",
          ],
        },
        {
          name: "Subcategory 5.3",
          subsubcategories: [
            "Sub-subcategory 5.3.1",
            "Sub-subcategory 5.3.2",
            "Sub-subcategory 5.3.3",
            "Sub-subcategory 5.3.4",
            "Sub-subcategory 5.3.5",
          ],
        },
        {
          name: "Subcategory 5.4",
          subsubcategories: [
            "Sub-subcategory 5.4.1",
            "Sub-subcategory 5.4.2",
            "Sub-subcategory 5.4.3",
            "Sub-subcategory 5.4.4",
            "Sub-subcategory 5.4.5",
          ],
        },
        {
          name: "Subcategory 5.5",
          subsubcategories: [
            "Sub-subcategory 5.5.1",
            "Sub-subcategory 5.5.2",
            "Sub-subcategory 5.5.3",
            "Sub-subcategory 5.5.4",
            "Sub-subcategory 5.5.5",
          ],
        },
        {
          name: "Subcategory 5.6",
          subsubcategories: [
            "Sub-subcategory 5.6.1",
            "Sub-subcategory 5.6.2",
            "Sub-subcategory 5.6.3",
            "Sub-subcategory 5.6.4",
            "Sub-subcategory 5.6.5",
          ],
        },
        {
          name: "Subcategory 5.7",
          subsubcategories: [
            "Sub-subcategory 5.7.1",
            "Sub-subcategory 5.7.2",
            "Sub-subcategory 5.7.3",
            "Sub-subcategory 5.7.4",
            "Sub-subcategory 5.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 3",
      subcategories: [
        {
          name: "Subcategory 3.1",
          subsubcategories: [
            "Sub-subcategory 3.1.1",
            "Sub-subcategory 3.1.2",
            "Sub-subcategory 3.1.3",
            "Sub-subcategory 3.1.4",
            "Sub-subcategory 3.1.5",
          ],
        },
        {
          name: "Subcategory 3.2",
          subsubcategories: [
            "Sub-subcategory 3.2.1",
            "Sub-subcategory 3.2.2",
            "Sub-subcategory 3.2.3",
            "Sub-subcategory 3.2.4",
            "Sub-subcategory 3.2.5",
          ],
        },
        {
          name: "Subcategory 3.3",
          subsubcategories: [
            "Sub-subcategory 3.3.1",
            "Sub-subcategory 3.3.2",
            "Sub-subcategory 3.3.3",
            "Sub-subcategory 3.3.4",
            "Sub-subcategory 3.3.5",
          ],
        },
        {
          name: "Subcategory 3.4",
          subsubcategories: [
            "Sub-subcategory 3.4.1",
            "Sub-subcategory 3.4.2",
            "Sub-subcategory 3.4.3",
            "Sub-subcategory 3.4.4",
            "Sub-subcategory 3.4.5",
          ],
        },
        {
          name: "Subcategory 3.5",
          subsubcategories: [
            "Sub-subcategory 3.5.1",
            "Sub-subcategory 3.5.2",
            "Sub-subcategory 3.5.3",
            "Sub-subcategory 3.5.4",
            "Sub-subcategory 3.5.5",
          ],
        },
        {
          name: "Subcategory 3.6",
          subsubcategories: [
            "Sub-subcategory 3.6.1",
            "Sub-subcategory 3.6.2",
            "Sub-subcategory 3.6.3",
            "Sub-subcategory 3.6.4",
            "Sub-subcategory 3.6.5",
          ],
        },
        {
          name: "Subcategory 3.7",
          subsubcategories: [
            "Sub-subcategory 3.7.1",
            "Sub-subcategory 3.7.2",
            "Sub-subcategory 3.7.3",
            "Sub-subcategory 3.7.4",
            "Sub-subcategory 3.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 4",
      subcategories: [
        {
          name: "Subcategory 4.1",
          subsubcategories: [
            "Sub-subcategory 4.1.1",
            "Sub-subcategory 4.1.2",
            "Sub-subcategory 4.1.3",
            "Sub-subcategory 4.1.4",
            "Sub-subcategory 4.1.5",
          ],
        },
        {
          name: "Subcategory 4.2",
          subsubcategories: [
            "Sub-subcategory 4.2.1",
            "Sub-subcategory 4.2.2",
            "Sub-subcategory 4.2.3",
            "Sub-subcategory 4.2.4",
            "Sub-subcategory 4.2.5",
          ],
        },
        {
          name: "Subcategory 4.3",
          subsubcategories: [
            "Sub-subcategory 4.3.1",
            "Sub-subcategory 4.3.2",
            "Sub-subcategory 4.3.3",
            "Sub-subcategory 4.3.4",
            "Sub-subcategory 4.3.5",
          ],
        },
        {
          name: "Subcategory 4.4",
          subsubcategories: [
            "Sub-subcategory 4.4.1",
            "Sub-subcategory 4.4.2",
            "Sub-subcategory 4.4.3",
            "Sub-subcategory 4.4.4",
            "Sub-subcategory 4.4.5",
          ],
        },
        {
          name: "Subcategory 4.5",
          subsubcategories: [
            "Sub-subcategory 4.5.1",
            "Sub-subcategory 4.5.2",
            "Sub-subcategory 4.5.3",
            "Sub-subcategory 4.5.4",
            "Sub-subcategory 4.5.5",
          ],
        },
        {
          name: "Subcategory 4.6",
          subsubcategories: [
            "Sub-subcategory 4.6.1",
            "Sub-subcategory 4.6.2",
            "Sub-subcategory 4.6.3",
            "Sub-subcategory 4.6.4",
            "Sub-subcategory 4.6.5",
          ],
        },
        {
          name: "Subcategory 4.7",
          subsubcategories: [
            "Sub-subcategory 4.7.1",
            "Sub-subcategory 4.7.2",
            "Sub-subcategory 4.7.3",
            "Sub-subcategory 4.7.4",
            "Sub-subcategory 4.7.5",
          ],
        },
      ],
    },
    {
      name: "Category 5",
      subcategories: [
        {
          name: "Subcategory 5.1",
          subsubcategories: [
            "Sub-subcategory 5.1.1",
            "Sub-subcategory 5.1.2",
            "Sub-subcategory 5.1.3",
            "Sub-subcategory 5.1.4",
            "Sub-subcategory 5.1.5",
          ],
        },
        {
          name: "Subcategory 5.2",
          subsubcategories: [
            "Sub-subcategory 5.2.1",
            "Sub-subcategory 5.2.2",
            "Sub-subcategory 5.2.3",
            "Sub-subcategory 5.2.4",
            "Sub-subcategory 5.2.5",
          ],
        },
        {
          name: "Subcategory 5.3",
          subsubcategories: [
            "Sub-subcategory 5.3.1",
            "Sub-subcategory 5.3.2",
            "Sub-subcategory 5.3.3",
            "Sub-subcategory 5.3.4",
            "Sub-subcategory 5.3.5",
          ],
        },
        {
          name: "Subcategory 5.4",
          subsubcategories: [
            "Sub-subcategory 5.4.1",
            "Sub-subcategory 5.4.2",
            "Sub-subcategory 5.4.3",
            "Sub-subcategory 5.4.4",
            "Sub-subcategory 5.4.5",
          ],
        },
        {
          name: "Subcategory 5.5",
          subsubcategories: [
            "Sub-subcategory 5.5.1",
            "Sub-subcategory 5.5.2",
            "Sub-subcategory 5.5.3",
            "Sub-subcategory 5.5.4",
            "Sub-subcategory 5.5.5",
          ],
        },
        {
          name: "Subcategory 5.6",
          subsubcategories: [
            "Sub-subcategory 5.6.1",
            "Sub-subcategory 5.6.2",
            "Sub-subcategory 5.6.3",
            "Sub-subcategory 5.6.4",
            "Sub-subcategory 5.6.5",
          ],
        },
        {
          name: "Subcategory 5.7",
          subsubcategories: [
            "Sub-subcategory 5.7.1",
            "Sub-subcategory 5.7.2",
            "Sub-subcategory 5.7.3",
            "Sub-subcategory 5.7.4",
            "Sub-subcategory 5.7.5",
          ],
        },
      ],
    },
  ];

  const handleOptionClick = (option) => {
    console.log(`Selected: ${option}`);
  };

  return (
    <div className="hidden md:flex justify-between mt-2">
      {/* Left Section */}
      <ul
        className="flex gap-5 cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <li
          className={`relative flex items-center gap-2 cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          } ${
            isCategoriesHovered ? "font-bold underline underline-offset-4" : ""
          }`}
          onMouseEnter={() => {
            setIsCategoriesHovered(true);
            setHoveredCategory(0); 
            setHoveredSubcategory(0); 
          }}
          onMouseLeave={() => setIsCategoriesHovered(false)}
        >
          <span>
            <RxHamburgerMenu />
          </span>
          All Categories
          {/* Dropdown Menu */}
          {isCategoriesHovered && (
            <div className="absolute top-6 -left-4 right-0 flex bg-white shadow-lg rounded-md p-2 z-50 w-[900px]">
              {/* Categories List */}
              <ul className="w-1/3 border-r border-gray-200 h-60 overflow-y-auto mt-5">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 font-medium ${
                      hoveredCategory === index ? "bg-gray-100" : ""
                    }`}
                    onMouseEnter={() => {
                      setHoveredCategory(index);
                      setHoveredSubcategory(0); // Default to the first subcategory for the selected category
                    }}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>

              {/* Subcategories and Sub-subcategories List */}
              <div className="flex w-2/3 pl-4 mt-5">
                {/* Subcategories List */}
                <ul className="w-1/2 h-60 overflow-y-auto">
                  {categories[hoveredCategory]?.subcategories.map(
                    (subcategory, subIndex) => (
                      <li
                        key={subIndex}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 ${
                          hoveredSubcategory === subIndex ? "bg-gray-200" : ""
                        }`}
                        onMouseEnter={() => setHoveredSubcategory(subIndex)}
                        onClick={() => handleOptionClick(subcategory.name)}
                      >
                        {subcategory.name}
                      </li>
                    )
                  )}
                </ul>

                {/* Sub-subcategories List */}
                <ul className="w-1/2 pl-4 h-60 overflow-y-auto">
                  {categories[hoveredCategory]?.subcategories[
                    hoveredSubcategory
                  ]?.subsubcategories.map((subSubcategory, subSubIndex) => (
                    <li
                      key={subSubIndex}
                      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 ${
                        hoveredSubSubcategory === subSubIndex
                          ? "bg-gray-200"
                          : ""
                      }`}
                      onMouseEnter={() => setHoveredSubSubcategory(subSubIndex)}
                      onClick={() => handleOptionClick(subSubcategory)}
                    >
                      {subSubcategory}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Shop Item - Bold on hover */}
        <li
          className={`cursor-pointer ${
            isHovered ? "text-black" : "text-white"
          } ${isShopHovered ? "font-bold underline underline-offset-4" : ""}`}
          onMouseEnter={() => setIsShopHovered(true)}
          onMouseLeave={() => setIsShopHovered(false)}
        >
          Shop
        </li>
      </ul>
    </div>
  );
};

export default SubNavbar;
