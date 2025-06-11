import "@/app/globals.css"

const MediaPage = () => {
    return (
        <div className="bg-[url(/images/background/AG_bg.JPEG)]">
            <div className="flex justify-center items-center">
                <div className="bg-black/27 rounded-3xl w-[90%] md:w-[30%] m-[24px]">
                    <h2 className="text-[#E3E3E3] font-bold charter text-4xl md:text-6xl text-center p-4">MEDIA</h2>
                </div>
            </div>
            <div className="min-h-[450px] w-[100%] mt-[48px]">
                <div className="flex flex-row justify-center items-end w-[60%] m-auto relative">
                    {[
                        "/images/player/selected_player.png",
                        "/images/player/player1.png",
                        "/images/player/player3.png",
                        "/images/player/player5.png",
                        "/images/player/player4.png"
                    ].map((item, index) => (
                        <div key={index} className={`relative w-[200px] h-[200px] md:h-[300px] flex justify-center items-center ${index > 2 ? "hidden xl:flex" : ""}`}>
                            <img src={item} alt="player image" className="w-full h-full relative z-20"/>
                            <div className="absolute h-[450px] w-[450px] bg-radial from-[#D0780B] from-25% to-transparent to-60%"></div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    )
}



{/* <div className="pseudo_div">
                    <div className="image-Link_container">
                        <Image src={"/images/player/selected_player.png"} alt="" width={350} height={500} className="w-[350px] h-[500px] absolute left-[15%] bottom-[34%]"/>
                    </div>
                </div>
                <div className="image-Link_container">
                    <Image src={"/images/player/player1.png"} alt="" width={250} height={500} className="w-[300px] h-[400px] absolute left-[29%] bottom-[36%]"/>
                </div>
                <div className="image-Link_container">
                    <Image src={"/images/player/player3.png"} alt="" width={250} height={500} className="w-[250px] h-[300px] relative"/>
                </div>
                <div className="image-Link_container">
                    <Image src={"/images/player/player5.png"} alt="" width={250} height={500} className="w-[300px] h-[400px] absolute left-[50%] bottom-[36%]"/>
                </div>
                <div className="image-Link_container">
                    <Image src={"/images/player/player4.png"} alt="" width={250} height={500} className="w-[350px] h-[500px] absolute left-[60%] bottom-[34%]"/>
                </div> */}

export default MediaPage