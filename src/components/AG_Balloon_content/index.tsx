import Image from "next/image";
import AGDescriptionDiv from "../AGDescriptionDiv";

const AGBalloonDiv = () => {
    return (
        <>
        <div className="mt-55 relative flex w-full justify-center">
            <AGDescriptionDiv />
            <Image src="/images/background/airship_concept_art.png" alt="airship" width={0} height={0} sizes="100vw"
                className="w-[150px] sm:w-[250px] lg:w-[300px] h-auto absolute left-[-2%]  top-[-200px] sm:top-[-200px] sm:left-[-35%] md:top-[-270px] md:left-[-70%] lg:left-[-65%]  lg:top-[-300px]">
            </Image>
        </div>
        </>
    )
}

export default AGBalloonDiv