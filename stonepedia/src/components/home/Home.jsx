import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import About from "./About";
import Footer from "./Footer";
import Category from "./Category";
import Clients from "./Clients";
import Support from "./Support";
import Blogs from "./Blogs";
import News from "./News";
import Testimonials from "./Testimonials";
import LandingPage from "./LandingPage";

const images = [
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-2.jpg",
    heading: "Granite",
    description:
      "Unleash the Strength and Beauty of Granite: A Perfect Blend of Durability and Elegance",
    buttonText: "Visit",
  },
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-1.jpg",
    heading: "Marble",
    description:
      "Elevate Your Spaces with Exquisite Marble: Timeless Beauty and Unmatched Sophistication",
    buttonText: "Visit",
  },
  {
    src: "https://stonepedia.in/wp-content/uploads/2023/04/Marble-6.jpg",
    heading: "Onyx",
    description:
      "Experience the Luxurious Allure of Onyx: Nature's Artistry in Every Stone",
    buttonText: "Visit",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-black">
      {/* <div className="h-[85vh] overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500 h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative h-full">
              <img
                src={image.src}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              <div
                className={`absolute left-0 bottom-10 bg-white bg-opacity-75 px-8 py-3 lg:p-10 rounded-r-lg shadow-lg transition-opacity duration-1000 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <h2 className="text-2xl lg:text-3xl mx-5 lg:m-5 font-bold">
                  {image.heading}
                </h2>
                <p className="text-lg m-5">{image.description}</p>
                <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg ml-5">
                  {image.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div> */}
      <LandingPage />
      <About />
      <Category />

      <Support />
      <News />
      <Clients />
      <Blogs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
