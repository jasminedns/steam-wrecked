import React from "react";

const HpDownloadButton = () => {
  return (
    <button
      className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]
        mt-4 rounded-full px-5 py-2.5 
        text-white text-lg sm:text-xl font-semibold tracking-wide 
        cursor-pointer shadow-md 
        bg-[radial-gradient(circle,_#E67716_0%,_#761E1C_100%)]
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:opacity-90 
        hover:shadow-[0_0_10px_3px_rgba(255,140,0,0.4)]"
    >
      DOWNLOAD
    </button>
  );
};

export default HpDownloadButton;
