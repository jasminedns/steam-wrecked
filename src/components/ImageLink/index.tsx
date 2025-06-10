import { Pages } from "@/features/arrays/types";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"

const ImageLink = () => {
    const diffImg = (index:number) => {
        if (index === 0) {
            return <Image src={"/images/player/selected_player.png"} alt="player image" width={200} height={300} className="cursor-pointer w-full h-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]"/>
        } else if (index === 1) {
            return <Image src={"/images/player/player1.png"} alt="player image" width={200} height={300} className="cursor-pointer w-full h-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]"/>
        } else {
            return <Image src={"/images/player/player4.png"} alt="player image" width={200} height={300} className="cursor-pointer w-full h-auto max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[240px] xl:max-w-[280px]"/>
        }
    }

    return (
        <>
        <div className="flex flex-wrap justify-center gap-4 px-4 w-full max-w-screen z-20">
            {Pages.map((item:string, index:number) => (
                <div key={index} className="flex flex-col items-center w-full max-w-[120px] sm:max-w-[160px] md:max-w-[212px] lg:max-w-[260px] xl:max-w-[300px]">
                    <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="flex flex-col items-center justify-center w-full">
                        <div className="image__container relative w-full aspect-[2/3]">
                            {diffImg(index)}
                        </div>
                        {item.includes("the") ? <p className="image__link">about {item}</p> : <p className="image__link">{item}</p>}
                    </Link>
                </div>
            ))}
            </div>
        </>
    )
}

export default ImageLink;