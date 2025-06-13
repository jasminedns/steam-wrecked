import "@/app/globals.css"
import BottomToTopArrow from "@/components/BottomToTopArrow"
import BackgroundWrapper from "@/components/AGBackground"
import YouTubeSection from "@/components/YouTubeSection"
import BackArrow from "@/components/BackArrow"

import BlogMediaSection from "@/components/MediaBlogSection/BlogMediaSection"
const MediaPage = () => {
    return (
        <>
        <div className="absolute z-50 pointer-events-auto bg-transparent">
              <BackArrow/>
          </div>
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
                                <div className="absolute h-[400px] w-[200px] sm:w-[300px] md:w-[450px] md:h-[450px] bg-radial from-[#D0780B] from-25% to-transparent to-60%"></div>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
            <YouTubeSection />
            <BottomToTopArrow />
            <div>
                <BlogMediaSection/>
            </div>

        </BackgroundWrapper>
        </>
    )
}

export default MediaPage