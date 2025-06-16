import ImageLink from "@/components/ImageLink"
import HpDownloadDiv from "@/components/Download/HpDownloadDiv";


export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="relative h-[70vh] max-sm:h-[50vh] max-md:h-[60vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center">
          <HpDownloadDiv/>
        </div>
        <div className="absolute h-[150px] w-[100%] bg-gradient-to-t from-[#0E5851]/90 to-transparent top-[44%] md:top-[65%]"></div>
        <div className="relative min-h-[70vh] max-md:min-h-[60vh] max-sm:min-h-[65vh] w-full bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center -mb-58 pb-65 md:-mb-36 md:pb-36">
          <div className="absolute h-full w-full bg-[#0E5851]/80" ></div>
          <div className="relative z-10 flex justify-evenly flex-wrap md:absolute md:inset-0 md:items-center md:mb-[48px]">
            <ImageLink />
          </div>
        </div>
      </div>
    </div>
  );
}