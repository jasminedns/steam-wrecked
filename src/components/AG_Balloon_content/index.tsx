import Image from "next/image";
import AGDescriptionDiv from "../AGDescriptionDiv";

const AGBalloonDiv = () => {
    return (
        <>
        <div className="mt-55 relative flex w-full justify-center">
            <AGDescriptionDiv />
            <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
                className="w-[150px] sm:w-[250px] md:w-[200px] lg:w-[300px] h-auto absolute left-[0%]  top-[-180px] sm:top-[-200px] sm:left-[-2%] md:top-[-200px] md:left-[-15%] lg:left-[-45%]  lg:top-[-250px]">
            </Image>
        </div>
        </>
    )
}

export default AGBalloonDiv