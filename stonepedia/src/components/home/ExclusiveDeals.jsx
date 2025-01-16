import React, { useState } from "react";

const ExclusiveDeals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      title: "Dhoni and E-Motorad",
      description: 'M.S. Dhoni sings "Bole Jo Koyal"',
      image: "path_to_image1",
      color: "red",
    },
    {
      id: 2,
      title: "Mirzapur S3 Launch",
      description: "Deepfake & LipSync Campaign for Prime Video",
      image: "path_to_image2",
      color: "blue",
    },
    {
      id: 3,
      title: "112 Emergency AI Agents",
      description: "Live Translation & Voice Agents for Bangalore Police",
      image: "path_to_image3",
      color: "green",
    },
    {
      id: 4,
      title: "Scene Stitch",
      description: "Short Form Video at Scale",
      image: "path_to_image4",
      color: "yellow",
    },
    {
      id: 5,
      title: "112 Emergency AI Agents",
      description: "Live Translation & Voice Agents for Bangalore Police",
      image: "path_to_image3",
      color: "orange",
    },
    {
      id: 6,
      title: "Scene Stitch",
      description: "Short Form Video at Scale",
      image: "path_to_image4",
      color: "blue",
    },
  ];

  const totalItems = items.length;

  // Handle Next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Handle Previous button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full bg-gray-900 h-[500px] flex flex-col justify-center items-center">
      <h2 className="text-white text-xl mb-4">Exclusive Deals</h2>
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / 4}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-1/4 h-60 px-4 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-50 transform scale-50"
                  : index === (currentIndex + 1) % items.length
                  ? "opacity-100 transform scale-100"
                  : index === (currentIndex + 2) % items.length
                  ? "opacity-100 transform scale-100"
                  : index === (currentIndex + 3) % items.length
                  ? "opacity-50 transform scale-50"
                  : ""
              }`}
            >
              <div
                className="rounded-lg shadow-lg h-full cursor-pointer relative group overflow-hidden"
                style={{ backgroundColor: item.color }}
              >
                {/* Text Content */}
                <div className="absolute bottom-4 left-0 w-full text-white transition-transform duration-500 transform group-hover:-translate-y-48">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full text-white z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex space-x-2 mt-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;
