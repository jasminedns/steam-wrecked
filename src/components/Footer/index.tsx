import { SiItchdotio } from "react-icons/si"
import { FaXTwitter,FaInstagram,FaYoutube } from "react-icons/fa6";
import { Pages } from "@/features/arrays/types"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="relative bg-[#7D7D7D]/38 text-white flex justify-between p-[4px] z-10">
            <div className="uppercase text-sm m-[8px] flex flex-col">
                <Link href="/" className="hover:underline">Homepage</Link>
                    {Pages.map((item:string,index:number) => (
                        <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="hover:underline">{item.includes("the") ? `about  ${item}` : item}</Link>
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