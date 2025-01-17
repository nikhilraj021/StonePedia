import React from "react";
import Sorting from "./Sorting";

const AllProducts = () => {
  const allProducts = [
    {
      id: 1,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 4.6,
    },
    {
      id: 2,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg",
      title: "Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 4.8,
    },
    {
      id: 3,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
      title: "Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 4.2,
    },
    {
      id: 4,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 4.6,
    },
    {
      id: 5,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg",
      title: "Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 4.8,
    },
    {
      id: 6,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
      title: "Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 4.2,
    },
    {
      id: 7,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 4.6,
    },
    {
      id: 8,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg",
      title: "Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 4.8,
    },
    {
      id: 9,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
      title: "Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 4.2,
    },
  ];

  return (
    <div className="md:px-10 px-5 my-10 md:flex gap-10">
      <Sorting />
      <div className=" w-full border mb-5 rounded-lg shadow-lg">
        <div className="flex justify-between p-3">
          <h1 className="font-bold text-2xl text-gray-500">All Products</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-xl font-semibold">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="sort-by-icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 10.5a.5.5 0 00-.5-.5h-3a.5.5 0 000 1h3a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-7a.5.5 0 000 1h7a.5.5 0 00.5-.5zm0-3a.5.5 0 00-.5-.5h-11a.5.5 0 000 1h11a.5.5 0 00.5-.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <p className="font-semibold">Sort by</p>
            </div>

            <select id="price-sort" className=" outline-none cursor-pointer">
              <option value="">Price (High - Low)</option>
              <option value="">Price (Low - High)</option>
            </select>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-10 p-5">
          {allProducts.map((product) => (
            <li
              key={product.id}
              className="border rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="p-3">
                <h2 className="md:text-base lg:text-xl font-semibold">
                  {product.title}
                </h2>
                <p className="text-gray-500 md:text-sm lg:text-base">
                  By {product.shopBy}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-900 font-bold md:text-base lg:text-lg">
                    Rs {product.price}/-
                  </p>
                  <p className="text-white md:text-sm lg:text-base font-semibold bg-[#3b82f6] px-2 py-1 rounded-lg">
                    {product.rating} ★
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllProducts;
