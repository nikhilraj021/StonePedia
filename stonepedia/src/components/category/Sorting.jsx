import React from "react";
import { IoSearch } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";

const Sorting = () => {
  const categoryList = [
    {
      id: 1,
      title: "Marble",
    },
    {
      id: 2,
      title: "Imported Marble",
    },
    {
      id: 3,
      title: "Granite",
    },
    {
      id: 4,
      title: "Imported Granite",
    },
    {
      id: 5,
      title: "Onyx",
    },
    {
      id: 6,
      title: "Quartz",
    },
    {
      id: 7,
      title: "Travertine",
    },
    {
      id: 8,
      title: "Sandstone",
    },
    {
      id: 9,
      title: "Limestone",
    },
    {
      id: 10,
      title: "Best Selling",
    },
    {
      id: 11,
      title: "Our Premium Stones",
    },
    {
      id: 12,
      title: "StonePedia Exclusive",
    },
  ];

  const colorsList = [
    {
      id: 1,
      color: "Blue",
    },
    {
      id: 2,
      color: "Gray",
    },
    {
      id: 3,
      color: "Green",
    },
    {
      id: 4,
      color: "Red",
    },
    {
      id: 5,
      color: "Yellow",
    },
    {
      id: 6,
      color: "Belge",
    },
    {
      id: 7,
      color: "Black",
    },
    {
      id: 8,
      color: "Brown",
    },
    {
      id: 9,
      color: "Golden",
    },
    {
      id: 10,
      color: "Orange",
    },
    {
      id: 11,
      color: "Pink",
    },
    {
      id: 12,
      color: "Purple",
    },
    {
      id: 13,
      color: "Rainforest",
    },
    {
      id: 14,
      color: "Silver",
    },
    {
      id: 15,
      color: "Silver",
    },
  ];

  const ratingList = [
    {
      id: 1,
      ratingUrl:
        "https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png",
    },
    {
      id: 2,
      ratingUrl:
        "https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png",
    },
    {
      id: 3,
      ratingUrl:
        "https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png",
    },
    {
      id: 4,
      ratingUrl:
        "https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png",
    },
  ];

  return (
    <div className="border p-3 h-full rounded-lg shadow-lg">
      <div className="flex items-center gap-2 border bg-gray-300 p-2 rounded-lg">
        <input
          id="search-icon"
          type="search"
          className="bg-transparent w-full placeholder:text-gray-700 outline-none "
          placeholder="Search..."
        />
        <label htmlFor="search-icon">
          <span className="cursor-pointer">
            <IoSearch size={20} />
          </span>
        </label>
      </div>

      <div className="my-3">
        <h1 className="text-xl font-semibold">Category</h1>
        <div className="my-2 space-y-1 ml-2">
          {categoryList.map((category) => (
            <li key={category.id} className="list-none">
              <input
                type="radio"
                id={`radio-${category.id}`}
                className="mr-2 cursor-pointer"
                name="category"
              />
              <label
                htmlFor={`radio-${category.id}`}
                className="cursor-pointer"
              >
                {category.title}
              </label>
            </li>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-xl font-semibold">Choose Color</h1>
        <div className="md:grid gap-1 grid-cols-2 my-2 ml-2">
          {colorsList.map((color) => (
            <li key={color.id} className="list-none space-x-1">
              <input id={`checkbox-${color.id}`} type="checkbox" />
              <label
                htmlFor={`checkbox-${color.id}`}
                className="cursor-pointer"
              >
                {color.color}
              </label>
            </li>
          ))}
        </div>
      </div>

      <div className="my-3">
        <h1 className="text-xl font-semibold">Rating</h1>
        <div className="my-2 space-y-2 ml-2">
          {ratingList.map((eachRating) => (
            <li
              key={eachRating.id}
              className="list-none flex items-center gap-3 cursor-pointer"
            >
              <img src={eachRating.ratingUrl} alt="" className="w-3/5" />
              <span className="text-lg font-semibold">& up</span>
            </li>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button
          type="button"
          className="border border-[#0967d2] text-[#0967d2] font-semibold px-4 py-1 rounded-lg"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Sorting;