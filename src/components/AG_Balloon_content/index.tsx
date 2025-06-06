import Image from "next/image";

const AGBalloonDiv = () => {
    return (
        <>
             {/* <div className="ml-4 mt-6 absolute left-[15%] sm:left-[25%] md:left-[10%] lg:left-[30%] top-[15%] "> */}
        <div className="mt-40 flex w-full justify-center">
        <div className="bg-[#060A0A]/65  w-[250px] sm:w-[400px] md:w-[550px] lg:w-[800px] p-5 rounded-[45px] text-white 
        absolute left-[15%] top-[80%] sm:left-[10%] sm:top-[90%] md:left-[-30%] md:top-[50%] lg:left-[-35%] lg:top-[70%]">
        <p className="mt-4 mx-4 sm:mx-16 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eum quisquam illum similique sunt. Deleniti, quae ab fuga ducimus distinctio laudantium tempora dolorem alias nihil rerum aspernatur, quibusdam quod architecto?
        </p>      
      </div>
      </div>
      <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
           className="w-[150px] sm:w-[250px] lg:w-[300px] h-auto absolute top-[55%] left-[0%] sm:left-[-20%] sm:top-[40%] md:top-[-5%] md:left-[-60%] lg:left-[-65%] lg:top-[-5%]">
        </Image>
      {/* </div>  */}
        </>
    )
}

export default AGBalloonDiv