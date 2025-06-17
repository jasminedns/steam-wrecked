import AGBalloonDiv from "@/components/AG_Balloon_content"
import AG_Trailer_Div from "@/components/AG_Trailer_Div"
import AG_PPV_Div from "@/components/AG_PPV_Div"
import AGHeading from "@/components/AGHeading"
import BackArrow from "@/components/BackArrow"
import BottomToTopArrow from "@/components/BottomToTopArrow"
import AGShowcase from "@/components/AGshowCaseImages"
const GamePage = () => {
    return(
        <>
        <div className="relative h-[1000px] sm:h-[1000px] md:h-[800px]  bg-[#2F5E72]">
            <BackArrow />
            <div className="absolute inset-0">
                <div className="relative z-10 text-white flex flex-col items-center justify-center h-full ">
                    <img src="/images/background/AG_bg.JPEG" alt="Background" className="w-full h-full
                     object-cover object-left-bottom opacity-20 mix-blend-multiply" />
                    <div className="absolute top-4">
                    <AGHeading />
                    <AGBalloonDiv />

                    </div>
                </div>
            </div>
        </div>

        <div className="bg-[linear-gradient(75deg,rgba(23,109,130,1)_0%,rgba(130,100,75,1)_27%,rgba(32,113,135,1)_61%,rgba(16,84,94,1)_100%)] relative -mb-36 pb-35 md:-mb-36 md:pb-36">
              <div className="flex flex-col lg:mx-8 lg:flex-row justify-around">
                <AG_Trailer_Div />
                <AG_PPV_Div />
              </div>
              <AGShowcase />
              <BottomToTopArrow className="absolute bottom-40 right-0 md:right-6 z-50 p-3 rounded-full hover:bg-black"/>
        </div>
          
        </>
    )
}

export default GamePage