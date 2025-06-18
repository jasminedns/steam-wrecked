import HpDownloadButton from "./HpDownloadButton";

const HpDownloadDiv = () => {
  return (
    <div className="w-full flex justify-center items-center py-8 px-4 sm:px-6 md:px-10 charter">
      <div className="w-full max-w-[550px] h-[250px] sm:h-auto bg-[#060A0A]/75 px-6 sm:px-10 py-10 sm:py-14 rounded-xl text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug sm:leading-normal mb-6">
          THE WORLD OF <br className="hidden sm:block" /> <span>STEAM WRECKED</span>
        </h1>
        <div className="flex justify-center">
          <HpDownloadButton />
        </div>
        
      </div>
    </div>
  );
};

export default HpDownloadDiv;
