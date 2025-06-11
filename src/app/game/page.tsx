import AGBalloonDiv from "@/components/AG_Balloon_content"
import AGHeading from "@/components/AGHeading"
import BottomToTopArrow from "@/components/BottomToTopArrow"

const GamePage = () => {
    return(
        <>

        <div className="bg-[#2F5E72]">
            <div className=" inset-0">
                <div className="relative z-10 text-white flex flex-col items-center justify-center h-full ">
                    <img src="/images/background/AG_bg.JPEG" alt="Background" className="w-full h-full object-cover object-left-bottom opacity-20 mix-blend-multiply" />
                    <div className="absolute top-4">
                        <AGHeading />
                        <AGBalloonDiv />
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-[linear-gradient(75deg,rgba(23,109,130,1)_0%,rgba(130,100,75,1)_27%,rgba(32,113,135,1)_61%,rgba(16,84,94,1)_100%)] h-200 relative">
                 <BottomToTopArrow />
            </div>
       
        

        </>
    )
}

export default GamePage