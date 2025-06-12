import Image from "next/image";
import AGDescriptionDiv from "../AGDescriptionDiv";

const AGBalloonDiv = () => {
    return (
        <>
            <AGDescriptionDiv />
            <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
                className="w-[150px] sm:w-[250px] lg:w-[300px] h-auto absolute left-[5%]  top-[250px] sm:top-[180px] sm:left-[-10%] md:top-[150px] md:left-[-20%] lg:left-[-50%]  lg:top-[100px]">
            </Image>
    
        </>
    )
}

export default AGBalloonDiv