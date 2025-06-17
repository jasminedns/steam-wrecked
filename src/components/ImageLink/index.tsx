import { Pages } from "@/features/arrays/types";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"

const ImageLink = () => {
    const diffImg = (index:number) => {
        if (index === 0) {
            return <Image src={"/images/player/selected_player.png"} alt="player image" width={200} height={300} className="cursor-pointer"/>
        } else if (index === 1) {
            return <Image src={"/images/player/player1.png"} alt="player image" width={200} height={300} className="cursor-pointer"/>
        } else {
            return <Image src={"/images/player/player4.png"} alt="player image" width={200} height={300} className="cursor-pointer"/>
        }
    }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Pages.map((item: string, index: number) => (
        <div key={index} className="w-[212px] md:-mt-[36px]">
          <Link
            href={`/${item.replace(/^the /i, "")}`}
            className="flex flex-col items-center justify-center"
          >
            {diffImg(index)}
            <p className="image__link mt-2 text-center text-white text-sm">
              {item.includes("the") ? `about ${item}` : item}
            </p>
          </Link>
        </div>
      ))}
    </div>
    
    );
}

export default ImageLink;