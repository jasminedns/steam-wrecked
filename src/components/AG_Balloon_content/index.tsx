import Image from "next/image";

const AGBalloonDiv = () => {
    return (
        <>
        <div className="mt-40 relative flex w-full justify-center">
            <div className="bg-[#060A0A]/65  w-[300px] sm:w-[400px] md:w-[550px] lg:w-[800px] p-5 rounded-[45px] text-white 
                absolute top-[-40px] lg:top-[-90px]">
                <p className="mt-4 mx-4 sm:mx-16 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum quisquam illum similique sunt. Deleniti, quae ab fuga ducimus distinctio laudantium tempora dolorem alias nihil rerum aspernatur, quibusdam quod architecto?
                </p>      
            </div>
            <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
                className="w-[150px] sm:w-[250px] lg:w-[300px] h-auto absolute left-[-2%]  top-[-150px] sm:top-[-200px] sm:left-[-35%] md:top-[-220px] md:left-[-60%] lg:left-[-65%]  lg:top-[-300px]">
            </Image>
        </div>
        </>
    )
}

export default AGBalloonDiv