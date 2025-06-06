import { SiItchdotio } from "react-icons/si"
import { FaXTwitter,FaInstagram,FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-400/50 bg-opacity-50 text-white flex justify-between p-2">
            <div className="text-white">
                <p>links</p>
                <p>links</p>
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