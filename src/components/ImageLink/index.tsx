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
        <>
            {Pages.map((item:string, index:number) => (
                <div key={index} className="mb-3">
                    <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="flex flex-col items-center justify-center w-[212px]">
                        <div className="image__container">
                            {diffImg(index)}
                        </div>
                        {item.includes("the") ? <p className="image__link">about {item}</p> : <p className="image__link">{item}</p>}
                    </Link>
                </div>
            ))}
        </>
    )
}

export default ImageLink;