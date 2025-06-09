import { SiItchdotio } from "react-icons/si"
import { FaXTwitter,FaInstagram,FaYoutube } from "react-icons/fa6";
import { Pages } from "@/features/arrays/types"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-gray-400\50 text-white flex justify-between p-2 z-10">
            <div className="uppercase text-xs m-4 flex flex-col">
                <Link href="/">Homepage</Link>
                    {Pages.map((item:string,index:number) => (
                        <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="uppercase text-xs">{item.includes("the") ? `about  ${item}` : item}</Link>
                    ))}
            </div>
            <div className="flex mt-14 ">
                <div className="social_icon_container">
                    <FaInstagram size={32} className="social_icon"/>
                </div>
                <div className="social_icon_container">
                    <FaXTwitter size={32} className="social_icon" />
                </div>
                <div className="social_icon_container">
                    <FaYoutube size={32}  className="social_icon" />
                </div>
                <div className="social_icon_container">
                    <SiItchdotio size={32}   className="social_icon" />
                </div>
            </div>
        </footer>
    )
}
export default Footer