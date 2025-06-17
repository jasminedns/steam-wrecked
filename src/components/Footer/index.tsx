import { SiItchdotio } from "react-icons/si"
import { FaXTwitter,FaInstagram,FaYoutube } from "react-icons/fa6";
import { Pages } from "@/features/arrays/types"
import Link from "next/link"
import HeaderIcon from "../HeaderIcon";

const Footer = () => {
    return (
        <footer className="relative bg-[#7D7D7D]/38 text-white flex flex-col justify-center items-center z-10 md:flex-row md:justify-between">
            <div className="uppercase text-base m-[8px] flex flex-col md:w-[20%]">
                <Link href="/" className="hover:underline text-center mt-2">Homepage</Link>
                    {Pages.map((item:string,index:number) => (
                        <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="hover:underline text-center mt-2">{item.includes("the") ? `about  ${item}` : item}</Link>
                ))}
            </div>       
            {/* <div className="flex mt-8 mb-2 md:w-[20%] justify-center" className="hidden">  */}
            <div className="hidden">
                <div className="social_icon_container">
                    <FaInstagram size={40} className="social_icon hover:cursor-pointer" fill="white"/>
                </div>
                <div className="social_icon_container">
                    <FaXTwitter size={40} className="social_icon hover:cursor-pointer" fill="white"/>
                </div>
                <div className="social_icon_container">
                    <FaYoutube size={40}  className="social_icon hover:cursor-pointer" fill="white"/>
                </div>
                <div className="social_icon_container">
                    <SiItchdotio size={40}   className="social_icon hover:cursor-pointer" fill="white"/>
                </div>
            </div>
            <HeaderIcon linkClass="hidden md:flex items-center cursor-pointer w-[20%] justify-center" imgClass="hidden md:block w-[50%] h-auto "/>
        </footer>
    )
}
export default Footer