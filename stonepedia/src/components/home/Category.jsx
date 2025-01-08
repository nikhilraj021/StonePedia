import { div } from "framer-motion/client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Category = () => {
  const category = [
    {
      id: 1,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/g-01.png",
      title: "Indian Granite",
    },
    {
      id: 2,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/ig-01.png",
      title: "Imported Granite",
    },
    {
      id: 3,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/on-01.png",
      title: "Onyx",
    },
    {
      id: 4,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/q-01.png",
      title: "Quartz",
    },
    {
      id: 5,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/Untitled-1-01.png",
      title: "Travertine",
    },
    {
      id: 6,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/1-07-1.png",
      title: "Sandstone",
    },
    {
      id: 7,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/LI-01.png",
      title: "LimeStone",
    },
    {
      id: 8,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/b-01.png",
      title: "Indian Marble",
    },
    {
      id: 9,
      img: "https://stonepedia.in/wp-content/uploads/2024/10/im-01.png",
      title: "Imported Marble ",
    },
  ];
  return (
    <div className="mx-5 md:mx-10 mt-5">
      <div className="md:flex justify-between">
        <h1 className="text-2xl font-bold font-serif">Choose By Category</h1>
        <button className="flex items-center gap-2 border px-2 my-1 font-semibold rounded-md hover:border-white bg-yellow-300 hover:bg-pink-700 hover:text-white">
          VIEW MORE
          <span>
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="my-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-5 place-items-center">
        {category.map((each) => (
          <div
            key={each.id}
            className="relative h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 bg-cover bg-center group cursor-pointer"
            style={{ backgroundImage: `url(${each.img})` }}
          >
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:rounded-full transition-all duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white md:text-xl font-bold text-center">
              {each.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
