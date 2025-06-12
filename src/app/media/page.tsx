import "@/app/globals.css"
import BottomToTopArrow from "@/components/BottomToTopArrow"
import BackgroundWrapper from "@/components/AGBackground"
import YouTubeSection from "@/components/YouTubeSection"
import SocialMediaIcons from "@/components/SocialMediaIcons"
const MediaPage = () => {
    return (
        <BackgroundWrapper>

            <div className="mb-[32px]">
                <div className="flex justify-center items-center">
                    <div className="bg-black/27 rounded-3xl w-[90%] md:w-[30%] m-[24px]">
                        <h2 className="text-[#E3E3E3] font-bold charter text-4xl md:text-6xl text-center p-4">MEDIA</h2>
                    </div>
                </div>
                <div className="md:min-h-[450px] w-[100%] my-[48px]">
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
        <BottomToTopArrow />

            <h1>Media of steam-wreck</h1>
            <YouTubeSection />
            <SocialMediaIcons />
        </BackgroundWrapper>

    )
}

export default MediaPage