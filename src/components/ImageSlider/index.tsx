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
        <>
        <div className="m-8 w-full p-4 h-auto flex items-center">
            <SimpleImageSlider
                width={800}
                height={500}
                images={Images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
                />
              </div>
        </>
       
    )
}

export default ImageSlider