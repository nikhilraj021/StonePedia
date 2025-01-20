import React, { useState } from "react";
import Sorting from "./Sorting";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AllProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const allProducts = [
    {
      id: 1,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Red Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 4.6,
    },
    {
      id: 2,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg",
      title: "Blue Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 3.8,
    },
    {
      id: 3,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
      title: "Textured Sandstone",
      shopBy: "Pink Sandstone",
      price: 95,
      rating: 2.2,
    },
    {
      id: 4,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Golden Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 1.6,
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
      title: "Yellow Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 3.2,
    },
    {
      id: 7,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-4.jpg",
      title: "Silver Premium Granite",
      shopBy: "Granite",
      price: 300,
      rating: 3.6,
    },
    {
      id: 8,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-5.jpg",
      title: "Purple Classic Marble Slabs",
      shopBy: "Marble",
      price: 150,
      rating: 1.8,
    },
    {
      id: 9,
      image: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
      title: "RainForest Textured Sandstone",
      shopBy: "Sandstone",
      price: 95,
      rating: 2.2,
    },
  ];

 

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.title.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    const matchesColor =
      selectedColor.length > 0
        ? selectedColor.some((color) =>
            product.title.toLowerCase().includes(color.toLowerCase())
          )
        : true;
    const matchesRating = selectedRating
      ? Math.floor(product.rating) >= selectedRating
      : true;
    return matchesSearch && matchesCategory && matchesColor && matchesRating;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="md:px-10 lg:px-16 xl:px-20 2xl:px-32 px-5 md:flex gap-10">
      <Sorting
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        setSelectedColor={setSelectedColor}
        setIsSelectedRating={setSelectedRating}
      />
      <div className="w-full border mb-5 rounded-lg shadow-lg">
        <div className="flex justify-between pt-3 px-5">
          <h1 className="font-bold text-2xl text-gray-100">All Products</h1>
        </div>
        {paginatedProducts.length > 0 ? (
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 lg:gap-10 p-5 w-full">
            {paginatedProducts.map((product) => (
              <li
                key={product.id}
                className="border rounded-lg shadow-md hover:shadow-lg cursor-pointer bg-gray-500"
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
                  <p className="text-orange-500 md:text-sm lg:text-base">
                    By {product.shopBy}
                  </p>
                  <div className="flex justify-end items-center mt-2">
                    <p className="text-white md:text-sm lg:text-base font-semibold bg-[#3b82f6] px-2 py-1 rounded-lg">
                      {product.rating} ★
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center">
            <p className="text-gray-400">No Products Found</p>
          </div>
        )}
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 py-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-3 rounded-full ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white"
              }`}
            >
              <span>
                <FaAngleDoubleLeft size={20} />
              </span>
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-3 rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 text-white"
              }`}
            >
              <span>
                <FaAngleDoubleRight size={20} />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
