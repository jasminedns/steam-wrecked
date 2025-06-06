
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-[70vh] bg-[url('/images/background/keyart.jpeg')] bg-cover bg-center"></div>
      <div className="absolute top-[calc(76vh-0.60rem)] left-0 w-full h-4 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm pointer-events-none z-20"></div>
      <div className="relative -mb-26 h-[70vh] bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover w-full"></div>
    </div>

  );
}
