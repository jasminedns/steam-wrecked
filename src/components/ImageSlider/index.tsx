'use client'
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect, useState } from "react";

const Images:string[] = [
    "/images/background/image_1.png",
    "/images/background/image_2.png",
    "/images/background/image_3.png",
    "/images/background/image_4.png",
    "/images/background/image_5.png",
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
        setSliderSize({ width: 800, height: 500 });
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
      <div className="border-black border-2 shadow-2xl m-4">
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
