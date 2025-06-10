import PeopleCards from "@/features/components/AT-people-Cards/People-card"

const TeamPage = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[350px] md:h-[500px] bg-[url('/images/background/EnvironmentConceptGroundlevel.jpeg')] bg-cover bg-center md:bg-[right_95%] relative">
                <div className="bg-black/27 my-[48px] rounded-3xl w-[80%] md: w-[50%]">
                    <h2 className="charter text-[#E3E3E3] text-[1.5rem] text-center p-3 uppercase md:text-[64px] ">The Team Of Steam Wrecked</h2>
                </div>
                <div className="absolute h-[100px] w-[100%] bg-gradient-to-t from-[#79221E] to-transparent top-[72%] md:top-[80%]"></div>
            </div>
            <PeopleCards/>
        </>
    )
}

export default TeamPage