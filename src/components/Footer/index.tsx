import { SiItchdotio } from "react-icons/si"
import { FaXTwitter,FaInstagram,FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-400 text-white flex justify-between p-2">
            <div className="text-white">
                <p>Links</p>
                <p>Links</p>
                <p>Links</p>
                <p>Links</p>
            </div>
            <div className="flex mt-14 ">
            <div className="bg-black rounded-3xl m-1">
            <FaInstagram size={32} className="text-gray-600 m-1 p-1"/>
            </div>
            <div className="bg-black rounded-3xl m-1">
      <FaXTwitter size={32} className="text-gray-600 m-1 p-1" />
      </div>
      <div className="bg-black rounded-3xl m-1">
      <FaYoutube size={32}  className="text-gray-600 m-1 p-1" />
      </div>
      <div className="bg-black rounded-3xl m-1">
      <SiItchdotio size={32}   className="text-gray-600 m-1 p-1" />
      </div>
      </div>
        </footer>
    )
}

export default Footer