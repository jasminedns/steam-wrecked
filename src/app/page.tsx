import ImageLink from "@/components/ImageLink"
import HpDownloadDiv from "@/components/Download/HpDownloadDiv";


export default function Home() {
return (
    <div>
      <div className="flex flex-col min-h-screen">
      <div className="relative flex min-h-screen max-sm:h-[50vh] max-md:h-[60vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center flex items-center justify-center">
          <HpDownloadDiv/>
        </div>
        <div className="relative min-h-screen max-md:min-h-[60vh] max-sm:min-h-[65vh] w-full bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center -mb-36 pb-35 md:-mb-36 md:pb-36 landscape">
          <div className="absolute top-[-20px] inset-0 bg-gradient-to-b from-[#42a09710] via-transparent to-[#42a09710] z-0 pointer-events-none p-4 bg-[#42a09710] backdrop-blur-sm" ></div>
          <div className="relative z-10 flex justify-evenly flex-wrap md:absolute md:inset-0 md:items-center md:mb-[150px]">
            <ImageLink />
          </div>
        </div>
      </div>
    </div>
  );
}
