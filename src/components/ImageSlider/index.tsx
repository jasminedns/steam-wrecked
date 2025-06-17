'use client'
import SimpleImageSlider from "react-simple-image-slider";

const Images:string[] = [
    "/images/background/image_1.png",
    "/images/background/image_2.png",
    "/images/background/image_3.png",
    "/images/background/image_4.png",
    "/images/background/image_5.png",
];

const ImageSlider = () => {

    return (
      <div className="w-full flex justify-center items-center p-4">
        {/* Mobile */}
        <div className="block sm:hidden  border-black border-2 shadow-2xl m-4">
          <SimpleImageSlider
            width={320}
            height={200}
            images={Images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
  
        {/* Tablet */}
        <div className="hidden sm:block md:hidden  border-black border-2 shadow-2xl m-4 ">
          <SimpleImageSlider
            width={600}
            height={375}
            images={Images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>
  
        {/* Desktop */}
        <div className="hidden md:block lg:hidden  border-black border-2 shadow-2xl m-4">
          <SimpleImageSlider
            width={700}
            height={400}
            images={Images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </div>

        <div className="hidden lg:block border-black border-2 shadow-2xl m-4">
          <SimpleImageSlider
            width={900}
            height={500}
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