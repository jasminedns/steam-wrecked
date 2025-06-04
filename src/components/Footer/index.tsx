import { Pages } from "@/features/arrays/types"

const Footer = () => {
    return (
        <footer className="bg-gray-400 text-white">
            <div className="uppercase text-xs m-4">
                <p>Homepage</p>
                    {Pages.map((item:string,index:number) => (
                        <p key={index} className="uppercase text-xs">{item.includes("the") ? `about  ${item}` : item}</p>
                    ))}
            </div>
        </footer>
    )
}

export default Footer