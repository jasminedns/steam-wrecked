import { Pages } from "@/features/arrays/types"
import Link from "next/link"
const Footer = () => {
    return (
        <footer className="bg-gray-400 text-white">
            <div className="uppercase text-xs m-4 flex flex-col">
                <Link href="/">Homepage</Link>
                    {Pages.map((item:string,index:number) => (
                        <Link key={index} href={`/${item.replace(/^the /i, "")}`} className="uppercase text-xs">{item.includes("the") ? `about  ${item}` : item}</Link>
                    ))}
            </div>
        </footer>
    )
}

export default Footer