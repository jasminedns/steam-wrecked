import Image from "next/image";

const AGBalloonDiv = () => {
    return (
        <>
        <div className="mt-40relative flex w-full justify-center">
          <div className="bg-[#060A0A]/65  w-[250px] sm:w-[400px] md:w-[550px] lg:w-[800px] p-5 rounded-[45px] text-white 
                absolute top-[175%]">
                <p className="mt-4 mx-4 sm:mx-16 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum quisquam illum similique sunt. Deleniti, quae ab fuga ducimus distinctio laudantium tempora dolorem alias nihil rerum aspernatur, quibusdam quod architecto?
                </p>      
            </div>
            <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
                className="w-[150px] sm:w-[250px] lg:w-[300px] h-auto absolute top-[100%] left-[0%] sm:left-[-30%] sm:top-[70%] md:left-[-68%] md:top-[60%] lg:left-[-65%] lg:top-[-5%]">
            </Image>
        </div>
        </>
    )
}

export default AGBalloonDiv