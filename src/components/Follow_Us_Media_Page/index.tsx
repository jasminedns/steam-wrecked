import { SocialIcon } from "react-social-icons"
const FollowUs = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <p className="uppercase charter text-2xl font-semibold m-4">follow us</p>
                <div className="flex gap-4">
                    <SocialIcon url="https://www.instagram.com/" style={{ height: 50, width: 50 }}/>
                    <SocialIcon url="https://x.com/" style={{ height: 50, width: 50 }}/>
                    <SocialIcon url="https://www.youtube.com/" style={{ height: 50, width: 50 }}/>
                    <SocialIcon url="https://itch.io/" style={{ height: 50, width: 50 }}/>
                </div>
            </div>
        </>
    )
}

export default FollowUs