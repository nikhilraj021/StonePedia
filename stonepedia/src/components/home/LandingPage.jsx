import React from "react";

const LandingPage = () => {
  return (
    <div className="h-[88vh] relative">
      <video
        src="/background-video.mp4"
        loop
        muted
        autoPlay
        className="h-full absolute inset-0 w-full object-cover"
      />
      <div className="relative bg-gradient-to-br from-black h-full bg-opacity-50 z-10 ">
        
      </div>
    </div>
  );
};

export default LandingPage;
