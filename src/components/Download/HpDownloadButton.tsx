import React from "react";

const HpDownloadButton = () => {
  return (
    <button
      className="
        w-full max-w-[460px] sm:max-w-[500px] md:max-w-[550px]
        mt-4
        px-8 py-3
        rounded-full
        text-white text-xl sm:text-2xl font-semibold
        bg-[radial-gradient(circle,_#E67716_0%,_#761E1C_100%)]
        shadow-md
        transition duration-300 ease-in-out
        hover:scale-105 hover:opacity-90 hover:shadow-[0_0_10px_3px_rgba(255,140,0,0.4)]
        cursor-pointer
      "
    >
      DOWNLOAD
    </button>
  );
};

export default HpDownloadButton;
