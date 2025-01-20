import React from "react";
import { BsCamera } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const LandingPage = () => {
  return (
    <div className="relative h-[65vh]">
      <img
        src="https://s.alicdn.com/@img/imgextra/i4/O1CN01ustqhi1Tz44lu4arh_!!6000000002452-0-tps-3840-1248.jpg_q60.jpg"
        alt="Background"
        className="h-full absolute inset-0 w-full object-cover"
      />
      <div className="relative h-full bg-opacity-50 z-10 flex items-center justify-center xl:py-60">
        <div className="absolute left-5 md:left-10 xl:left-20 space-y-2 lg:space-y-3 xl:space-y-4 w-2/3">
          <p className="text-sm md:text-lg lg:text-xl text-white">
            Learn about StonePedia.com
          </p>
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-white">
            The Leading B2B ecommerce platform for global trade
          </h1>
          <div className="md:mt-5 flex bg-white rounded-full p-1 lg:p-3 gap-2 md:gap-5">
            <input
              type="search"
              className="w-full outline-none rounded-full pl-2 md:pl-5 text-sm md:text-lg"
            />
            <div className="flex items-center gap-2 md:gap-5">
              <span>
                <BsCamera className="text-xl md:text-2xl lg:text-3xl" />
              </span>
              <button className="bg-[#ff6a00] flex items-center gap-2 p-1 md:p-3 rounded-full text-white font-semibold">
                <span>
                  <IoSearch className="text-lg md:text-xl lg:text-2xl" />
                </span>
                <span className="hidden md:block">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
