const GamePage = () => {
    return(
        // <div className="bg-[url('/images/background/AG_bg.jpeg')] opacity-75 bg-left-bottom min-h-screen ">
        //   <div className="text-black bg-[#2F5E72] opacity-65 min-h-screen" >  
        // <h1>About the Steam-Wreck Game</h1>
        // </div>
        // </div>
<>
        <div className="relative h-screen bg-[#2F5E72]">
            <div className="absolute inset-0">
                <div className="relative z-10 text-white flex flex-col items-center justify-center h-full ">
                    <img src="/images/background/AG_bg.JPEG" alt="Background" className="w-full h-full object-cover object-left-bottom opacity-30 mix-blend-multiply" />
                    <div className="absolute top-4">content comes here</div>
                </div>
            </div>
        </div>
        <div className="bg-[linear-gradient(75deg,rgba(23,109,130,1)_0%,rgba(111,120,85,1)_30%,rgba(32,113,135,1)_61%,rgba(16,84,94,1)_100%)] h-64">
            images
</div>


        </>
    )
}

export default GamePage