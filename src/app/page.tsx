import ImageLink from "@/components/ImageLink"


export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div className="relative h-[70vh] max-sm:h-[50vh] max-md:h-[60vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-cente"></div>
        <div className="absolut -mt-3 w-full h-3 bg-gradient-to-b from-transparent to-black/1 backdrop-blur-sm pointer-events-none z-20"></div>
        <div className="relative max-sm:h-[65vh] max-md:h-[60vh] -mb-26 h-[70vh] bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center w-full"></div>
        <div className="flex justify-evenly mobile z-10">
          <ImageLink />
        </div>
      </div>
    </div>
  );
}