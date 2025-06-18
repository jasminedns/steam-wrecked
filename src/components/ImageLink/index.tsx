import { Pages } from "@/features/arrays/types";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"

const ImageLink = () => {
  const diffImg = (index: number) => {
    const imageMap = [
      "/images/player/selected_player.png",
      "/images/player/player1.png",
      "/images/player/player4.png"
    ];
    return (
      <div className="relative w-full aspect-[2/3] image__container">
        <Image
          src={imageMap[index] || imageMap[2]}
          alt={`Player image ${index + 1}`}
          fill
          className="object-cover cursor-pointer rounded-md w-[100%] h-auto"
          priority={index === 0}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Pages.map((item: string, index: number) => (
        <div key={index} className="w-[212px] md:-mt-[36px] ">
          <Link
            href={`/${item.replace(/^the /i, "")}`}
            className="flex flex-col items-center justify-center"
          >
            {diffImg(index)}
            <p className="image__link mt-2 text-center text-white text-sm hover:underline">
              {item.includes("the") ? `about ${item}` : item}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ImageLink;