
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] max-sm:h-[50vh] max-md:h-[60vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-cente"></div>
      <div className="absolute bottom-40 max-sm:bottom-[39.3%] max-md:bottom-[29%] w-full h-3 bg-black/10 backdrop-blur-sm pointer-events-none z-10"></div>
      <div className="relative max-sm:h-[65vh] max-md:h-[60vh] -mb-26 h-[70vh] bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-[center_right_20%] sm:bg-right md:bg-center w-full"></div>
    </div>

  );
}

