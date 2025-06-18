import "@/app/globals.css"
import BottomToTopArrow from "@/components/BottomToTopArrow"
import BackgroundWrapper from "@/components/AGBackground"
import BackArrow from "@/components/BackArrow"
import ImageSlider from "@/components/ImageSlider"

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
                        <h2 className="text-[#E3E3E3] font-bold charter text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center p-4">
                           MEDIA
                          </h2>

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
                                <img src={item} alt="player image" className="w-full h-auto object-contain relative z-20"/>
                                <div className="absolute h-[400px] w-[200px] sm:w-[300px] md:w-[450px] md:h-[450px] bg-radial from-[#D0780B] from-25% to-transparent to-60%"></div>
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
            <BottomToTopArrow className="absolute bottom-6 right-0 md:right-6 z-50 p-3 rounded-full hover:bg-black"/>
            <div>
                <ImageSlider />
            </div>
        </BackgroundWrapper>
        </>
    )
}

export default MediaPage