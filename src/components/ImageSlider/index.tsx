'use client'
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from "react";

const Images:string[] = [
  '/images/screenshots/ScreenShot00001.png',
  '/images/screenshots/ScreenShot00002.png',
  '/images/screenshots/ScreenShot00003.png',
  '/images/screenshots/ScreenShot00004.png',
  '/images/screenshots/ScreenShot00006.png',
  '/images/screenshots/ScreenShot00007.png',
  '/images/screenshots/ScreenShot00009.png',
  '/images/screenshots/ScreenShot00010.png',
  '/images/screenshots/ScreenShot00011.png',
  '/images/screenshots/ScreenShot00012.png',
  '/images/screenshots/ScreenShot00013.png',
  '/images/screenshots/ScreenShot00014.png',
];

interface SliderSize {
  width: number;
  height: number;
}

const ImageSlider = () => {
  const [sliderSize, setSliderSize] = useState<SliderSize>({ width: 320, height: 200 });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSliderSize({ width: 900, height: 500 });
      } else if (screenWidth >= 768) {
        setSliderSize({ width: 700, height: 400 });
      } else if (screenWidth >= 640) {
        setSliderSize({ width: 600, height: 375 });
      } else {
        setSliderSize({ width: 320, height: 200 });
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center items-center p-4">
      <div className="border-black border-2 shadow-2xl m-4 mb-[48px] sm:m-4">
      <SimpleImageSlider
        width={sliderSize.width}
        height={sliderSize.height}
        images={Images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      </div>
    </div>
  );
};

export default ImageSlider;
