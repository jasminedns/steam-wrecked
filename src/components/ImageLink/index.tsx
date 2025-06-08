import { Pages } from "@/features/arrays/types";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"

const ImageLink = () => {
    const diffImg = (index:number) => {
        if (index === 0) {
            return <Image src={"/images/player/selected_player.png"} alt="player image" width={200} height={300}/>
        } else if (index === 1) {
            return <Image src={"/images/player/player1.png"} alt="player image" width={200} height={300}/>
        } else {
            return <Image src={"/images/player/player4.png"} alt="player image" width={200} height={300}/>
        }
    }

    return (
        <>
            {Pages.map((item:string, index:number) => (
                <div key={index} className="flex flex-col items-center justify-center w-[212px] mb-3">
                    {diffImg(index)}
                    <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="image__link">{item.includes("the") ? `about ${item}` : item}</Link>
                </div>
            ))}
        </>
    )
}

export default ImageLink;