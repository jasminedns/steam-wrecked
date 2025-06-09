import HpDownloadDiv from "@/components/Download/HpDownloadDiv";
import ImageLink from "@/components/ImageLink";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[70vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-center"></div>
      <div className="absolute bottom-30 left-0 w-full h-3 bg-gradient-to-b from-transparent to-white/30 backdrop-blur-sm z-10 pointer-events-none"></div>
      <div className="h-[30vh] bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-top w-full"></div>
      <HpDownloadDiv />
      <div className="flex justify-evenly mobile">
        <ImageLink />
      </div>
    </div>
  );
}